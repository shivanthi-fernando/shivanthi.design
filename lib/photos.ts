import fs from "node:fs";
import path from "node:path";
import { imageSizeFromFile } from "image-size/fromFile";

export type Photo = { src: string; width: number; height: number };

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

/**
 * Reads every image dropped into `public/<folder>` — add a photo there and
 * it shows up automatically, no code changes needed. Runs on the server
 * only (import from a Server Component).
 *
 * Reads each photo's real dimensions from the file header only (not the
 * whole file), so callers can size cards via next/image — which
 * resizes/compresses on the way out instead of shipping raw multi-MB
 * phone photos straight to the browser.
 */
export async function getFolderPhotos(folder: string): Promise<Photo[]> {
  const dir = path.join(process.cwd(), "public", folder);
  let files: string[];
  try {
    files = fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort();
  } catch {
    return [];
  }

  return Promise.all(
    files.map(async (file) => {
      try {
        const { width, height } = await imageSizeFromFile(path.join(dir, file));
        return { src: `/${folder}/${file}`, width: width ?? 800, height: height ?? 1000 };
      } catch {
        // Corrupt/unreadable file — fall back to a sane ratio rather than
        // dropping the photo entirely.
        return { src: `/${folder}/${file}`, width: 800, height: 1000 };
      }
    }),
  );
}
