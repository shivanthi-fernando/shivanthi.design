import { SectionHead } from "./ui";
import OtherExplorations from "./OtherExplorations";
import ProjectsTabs from "./ProjectsTabs";
import CaseStudies from "./CaseStudies";

// Only ever rendered as the home page's Projects section now (the standalone
// /projects listing page was removed in favor of in-page navigation), so
// this always uses the tighter, no-standalone-page spacing.
export default async function Work() {
  return (
    <section className="pb-20 pt-4 sm:pb-28 sm:pt-6">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <SectionHead
          label="Work"
          title="Selected work, up close."
          intro="Some of the work shown here has been renamed or lightly altered due to client confidentiality. The thinking, process and quality behind it remain exactly as delivered."
        />

        <ProjectsTabs
          designProjects={<CaseStudies />}
          otherExplorations={<OtherExplorations />}
        />
      </div>
    </section>
  );
}
