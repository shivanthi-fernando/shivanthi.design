import { CaseStudyHero } from "./CaseStudyHero";
import {
  CaseStudyH2 as H2,
  CaseStudyH3 as H3,
  CaseStudyP as P,
  CaseStudyList,
  CaseStudyFacts,
  CaseStudyImageSlot as ImageSlot,
} from "./case-study-ui";

const palette = [
  { role: "Primary", hex: "#C9BEFB" },
  { role: "Secondary", hex: "#B7DDD0" },
];

export default function MosaicCaseStudy() {
  return (
    <CaseStudyHero
      image="/projects/Mosaic/Mosaic_Thumbnail.png"
      label="Mosaic"
      title="Mosaic"
      intro="Redesigning a Norwegian product after uncovering what users and the client actually needed."
    >
      <CaseStudyFacts
        facts={[
          { label: "Role", value: "UX/UI Designer" },
          { label: "Project type", value: "Client-requested redesign & design system" },
        ]}
      />

          <H2>Overview</H2>
          <P>
            Mosaic was an ongoing product when I joined the project. The
            backend and frontend were already developed, and the client was
            happy with the functionality and how the product worked.
            However, the visual direction did not meet their expectations.
          </P>
          <P>
            My involvement began with understanding what the client wanted
            the product to look and feel like, exploring the preferences of
            the target users, and translating those insights into a more
            cohesive visual experience.
          </P>

          <H2>The Challenge</H2>
          <P>
            The product had a working foundation, but its visual identity
            lacked consistency. The existing design system contained a wide
            range of colors and components, and the way those components
            were used in the product was not always consistent.
          </P>
          <P>
            The client wanted a more refined, minimal, and visually cohesive
            experience. I saw an opportunity to address not only the
            individual screens but also the design system that would guide
            the product&rsquo;s future development.
          </P>

          <ImageSlot caption="The existing interface showed inconsistencies in visual direction and component usage." />

          <H2>Understanding the Users and the Client</H2>
          <P>
            I started with a discussion with the client to understand their
            expectations, concerns, and the direction they wanted for the
            product. I also researched the preferences of the Norwegian user
            group to develop a better understanding of the visual style that
            would resonate with them.
          </P>
          <P>
            The research helped me explore a direction centered around
            light, minimalistic interfaces, restrained use of color, and
            clear visual hierarchy. These insights became the foundation for
            the design concept.
          </P>

          <ImageSlot caption="Exploring a lighter, more minimal visual direction based on user preferences and client expectations." />

          <H2>From Concept to Client Approval</H2>
          <P>
            Rather than redesigning every screen immediately, I designed one
            screen as a visual concept. This allowed me to demonstrate the
            proposed direction and gather feedback from the client early in
            the process.
          </P>
          <P>
            The client responded very positively to the concept and asked me
            to continue redesigning the remaining screens. This gave the
            project a clear visual direction and an opportunity to improve
            the product beyond its existing interface.
          </P>

          <ImageSlot caption="A redesigned screen used to validate the proposed visual direction with the client." />

          <H2>Rethinking the Design System</H2>
          <P>
            As I continued exploring the redesign, I identified a broader
            opportunity: the existing design system needed to evolve
            alongside the product.
          </P>
          <P>
            The design system contained many different button colors and
            visual variations. In practice, developers were not always
            using the existing components, and technical changes sometimes
            required manually creating or adapting components.
          </P>
          <P>
            I proposed redesigning the design system using the existing one
            as a starting point. The goal was to establish a more
            structured foundation that would clearly communicate the
            product&rsquo;s visual direction and support the team&rsquo;s
            development needs.
          </P>

          <H3>Establishing a Cohesive Visual Language</H3>
          <CaseStudyList>
            <li>Defining a clear primary and secondary color palette.</li>
            <li>
              Establishing relevant color shades and assigning them to
              appropriate interface roles.
            </li>
            <li>Creating consistent button styles and states.</li>
            <li>Choosing a suitable icon pack.</li>
            <li>Establishing a clearer visual direction for the product.</li>
            <li>
              Building a foundation that could support the redesign of the
              remaining screens.
            </li>
          </CaseStudyList>

          <H3>Color Palette</H3>
          <P>
            The proposed palette uses soft purple and green as the primary
            visual accents. The palette was intended to create a calm,
            cohesive direction while reducing unnecessary variation in the
            existing interface.
          </P>
          <div className="mt-4 flex flex-wrap gap-4">
            {palette.map((c) => (
              <div
                key={c.hex}
                className="flex items-center gap-3 rounded-xl border border-line bg-card p-3"
              >
                <span
                  className="h-10 w-10 shrink-0 rounded-full border border-line-strong"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden
                />
                <div>
                  <div className="text-sm font-semibold text-ink">{c.role}</div>
                  <div className="font-mono text-xs text-muted">{c.hex}</div>
                </div>
              </div>
            ))}
          </div>

          <ImageSlot caption="Establishing a consistent visual language through a refined design system." />

          <H2>Outcome</H2>
          <P>
            The client approved the proposed direction and agreed to move
            forward with the design system redesign alongside the screen
            redesign.
          </P>
          <P>
            What began as a request to improve the visual appearance of an
            existing product became an opportunity to establish a more
            consistent design foundation for the product&rsquo;s future.
          </P>
          <P>
            The project reinforced the importance of understanding client
            expectations, validating design concepts early, and recognizing
            when a visual problem is also a design system problem.
          </P>

          <H2>Key Takeaway</H2>
          <P>
            A successful redesign is not always about changing individual
            screens. Sometimes, the most valuable improvement is creating
            the foundation that helps every screen feel like part of the
            same product.
          </P>
    </CaseStudyHero>
  );
}
