import { site } from "@/lib/site";
import { SectionHead, InlineLink } from "./ui";
import DesignShots from "./DesignShots";
import CaseStudies from "./CaseStudies";

export default async function Work() {
  return (
    <section className="pb-20 pt-28 sm:pb-28 sm:pt-32 md:pt-36">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            label="Work"
            title="Selected work, up close."
            intro="A look at my design work, from interface explorations to full case studies covering how I approach research, decisions and outcomes."
          />
          <InlineLink href={site.bookingUrl} external>
            Start a project
          </InlineLink>
        </div>

        <DesignShots />
        <CaseStudies />
      </div>
    </section>
  );
}
