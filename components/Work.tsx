import { site } from "@/lib/site";
import { SectionHead, InlineLink } from "./ui";

export default function Work() {
  return (
    <section className="pb-20 pt-28 sm:pb-28 sm:pt-32 md:pt-36">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            label="Work"
            title={
              <>
                Selected work,
                <br />
                sorted into folders.
              </>
            }
            intro="A peek at recent SaaS, AI and mobile projects. Each folder is a slice of what I do — dashboards, agent UIs and onboarding-first apps."
          />
          <InlineLink href={site.bookingUrl} external>
            Start a project
          </InlineLink>
        </div>
      </div>
    </section>
  );
}
