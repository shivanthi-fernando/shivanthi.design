import { SectionHead } from "./ui";
import OtherExplorations from "./OtherExplorations";
import ProjectsTabs from "./ProjectsTabs";
import CaseStudies from "./CaseStudies";

export default async function Work({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "pb-20 pt-4 sm:pb-28 sm:pt-6" : "pb-20 pt-28 sm:pb-28 sm:pt-32 md:pt-36"}>
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
