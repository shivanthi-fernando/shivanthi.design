import { SectionHead } from "./ui";
import OtherExplorations from "./OtherExplorations";
import ProjectsTabs from "./ProjectsTabs";
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

        <ProjectsTabs
          designProjects={<CaseStudies />}
          otherExplorations={<OtherExplorations />}
        />
      </div>
    </section>
  );
}
