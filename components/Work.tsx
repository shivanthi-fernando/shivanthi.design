import { SectionHead } from "./ui";
// DesignShots hidden for now — re-enable by restoring the import and
// the <DesignShots /> render below.
// import DesignShots from "./DesignShots";
import CaseStudies from "./CaseStudies";

export default async function Work() {
  return (
    <section className="pb-20 pt-28 sm:pb-28 sm:pt-32 md:pt-36">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <SectionHead
          label="Work"
          title="Selected work, up close."
          intro="A look at my design work, from interface explorations to full case studies covering how I approach research, decisions and outcomes."
        />

        <CaseStudies />
      </div>
    </section>
  );
}
