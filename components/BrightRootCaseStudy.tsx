import { CaseStudyHero } from "./CaseStudyHero";
import {
  CaseStudyH2 as H2,
  CaseStudyH3 as H3,
  CaseStudyP as P,
  CaseStudyList,
  CaseStudyFacts,
  CaseStudyFlow,
  CaseStudyQuote,
  CaseStudyImageSlot as ImageSlot,
} from "./case-study-ui";

export default function BrightRootCaseStudy() {
  return (
    <CaseStudyHero
      image="/projects/BrightRoot/BrightRoot_Thumbnail.png"
      label="BrightRoot"
      title="Turned fragmented education workflows into one connected experience"
      intro={[
        "Institutes needed a clearer digital way to attract students to academic competitions and generate revenue through paid registrations. The challenge was connecting discovery, level selection, pricing, payment, and participation without making the experience feel fragmented.",
        "I designed a connected experience that guided students from discovering a competition to registering, participating, taking assessments, and reviewing their progress, while giving institutes the tools to manage the ecosystem behind it.",
      ]}
    >
      <CaseStudyFacts
        facts={[
          { label: "Role", value: "UX/UI Designer" },
          { label: "Platform", value: "Web" },
          { label: "Tools", value: "Figma" },
          {
            label: "Scope",
            value:
              "Student experience · Competition experience · Exam portal · Admin experience",
          },
        ]}
      />

      <H2>Problem</H2>
      <P>
        Institutes needed a digital way to attract students to their
        competitions and generate revenue through paid registrations.
        Students needed to understand what they were signing up for,
        choose between different competition levels and prices, complete
        payment, and continue participating after registration.
      </P>
      <P>
        At the same time, the platform needed to support the workflows
        behind the experience, including student activities, exams,
        leaderboards, question management, and administration.
      </P>
      <P>
        The challenge was to create a connected experience that supported
        the institute&rsquo;s business model while keeping the student
        journey clear and easy to navigate.
      </P>
      <ImageSlot caption="Competition discovery page showing upcoming competitions and events." />

      <H2>Understanding the problem</H2>
      <P>
        I approached the platform as an ecosystem rather than a collection
        of individual screens.
      </P>
      <P>The core journey was:</P>
      <CaseStudyFlow
        steps={[
          "Discover",
          "Understand",
          "Choose level",
          "Pay",
          "Register",
          "Participate",
          "Assess",
          "Review",
        ]}
      />
      <P>Behind the student experience was another connected workflow:</P>
      <CaseStudyFlow steps={["Create", "Organize", "Publish", "Manage", "Review"]} />
      <P>
        This helped me understand where different parts of the product
        needed to connect and where users needed additional context before
        taking an action.
      </P>
      <ImageSlot caption="A wide composition showing the competition page, registration flow, student dashboard, and leaderboard." />

      <H2>Design challenge 01: Making competition registration a clear path to conversion</H2>
      <P>
        The competition experience was central to the institute&rsquo;s
        business model. Students could participate at different levels,
        including District, State, Country, and Global, with a different
        price associated with each level.
      </P>
      <P>
        This meant registration was more than a simple action. Students
        needed enough information to understand the competition, choose
        their level, see the corresponding price, and confidently proceed
        with payment.
      </P>
      <P>I structured the journey around a clear progression:</P>
      <CaseStudyFlow steps={["Understand", "Choose", "Confirm", "Pay", "Register"]} />
      <ImageSlot caption="Competition details screen with the different participation levels and pricing." />
      <ImageSlot caption="Registration or payment flow showing how the selected level carries through the process." />

      <H2>Design challenge 02: Helping students stay oriented after registration</H2>
      <P>
        Once students registered, the experience needed to shift from
        acquisition to participation.
      </P>
      <P>
        Students could have upcoming competitions, events, assigned tasks,
        announcements, calendar items, and other activities. Instead of
        making students search through different areas of the platform, I
        structured the dashboard around what they needed to know and act
        on next.
      </P>
      <P>The dashboard brought together:</P>
      <CaseStudyList>
        <li>What I have registered for</li>
        <li>What I need to do</li>
        <li>What is coming next</li>
        <li>What has changed</li>
      </CaseStudyList>
      <ImageSlot caption="Student dashboard showing statistics, tasks, upcoming competitions, calendar, and announcements." />

      <H2>Design challenge 03: Connecting participation with progress</H2>
      <P>
        Competition registration was only the beginning of the experience.
        Students also needed a way to understand their standing and
        progress.
      </P>
      <P>
        I connected the leaderboard structure to the same competition
        levels students encountered during registration.
      </P>
      <CaseStudyFlow steps={["District", "State", "Country", "Global"]} />
      <P>
        This created continuity between the level a student selected and
        the way their performance was represented afterwards.
      </P>
      <ImageSlot caption="Leaderboard showing the different competition levels." />

      <H2>Design challenge 04: Preparing students before assessment</H2>
      <P>
        The exam experience introduced another critical moment. Students
        needed to understand the assessment, verify their setup, and know
        what would happen before they started answering questions.
      </P>
      <P>
        I separated preparation from assessment so students could move
        through a clear sequence:
      </P>
      <CaseStudyFlow
        steps={["Understand", "Prepare", "Verify", "Answer", "Review", "Submit"]}
      />
      <P>
        The system and environment check was positioned before the
        assessment, followed by exam details and instructions.
      </P>
      <ImageSlot caption="Exam instructions and system/environment check screens." />

      <H2>Design challenge 05: Supporting different question types without changing the experience</H2>
      <P>
        The assessment experience supported multiple choice, drag and
        drop, short answer, and long answer questions.
      </P>
      <P>
        Although the interaction for each question type was different, I
        kept the surrounding experience consistent so students did not
        have to learn a new interface every time the question format
        changed.
      </P>
      <ImageSlot caption="A composition showing two or three different question types within the exam interface." />

      <H2>Design challenge 06: Making submission a confident decision</H2>
      <P>
        Finishing the last question does not necessarily mean a student is
        ready to submit.
      </P>
      <P>
        I introduced a dedicated review stage where students could check
        their answers before completing the assessment.
      </P>
      <CaseStudyFlow steps={["Answer", "Review", "Submit", "Results"]} />
      <P>
        After submission, students could access their results, answer
        sheet, and leaderboard.
      </P>
      <ImageSlot caption="Review answers screen followed by results screen." />

      <H2>Design challenge 07: Designing the workflows behind the student experience</H2>
      <P>
        The student experience depended on a set of administrative
        workflows behind the scenes.
      </P>
      <P>
        Administrators needed to create questions, manage the question
        bank, create and manage exams, review student answers, and
        configure the platform.
      </P>
      <P>
        I structured these workflows around their relationship with the
        student experience:
      </P>
      <CaseStudyFlow
        steps={["Create question", "Question bank", "Exam", "Student response", "Review"]}
      />
      <P>
        This helped ensure that the admin experience was not treated as a
        separate product, but as the system that powered the experiences
        students interacted with.
      </P>
      <ImageSlot caption="Admin question bank and exam management screens." />

      <H2>Designing the product as an ecosystem</H2>
      <P>The final experience connected three major areas:</P>
      <H3>Student experience</H3>
      <CaseStudyFlow steps={["Discover competitions", "Register", "Participate", "Assess", "Review"]} />
      <H3>Institute experience</H3>
      <CaseStudyFlow
        steps={["Attract students", "Organize competitions", "Manage registrations", "Deliver assessments"]}
      />
      <H3>Admin experience</H3>
      <CaseStudyFlow
        steps={["Create content", "Build assessments", "Manage students", "Review responses"]}
      />
      <P>
        The goal was not simply to make individual screens usable. It was
        to make the relationships between these workflows clear and
        consistent.
      </P>
      <ImageSlot caption="A full platform overview showing selected screens from the student, competition, exam, and admin experiences." />

      <H2>My contribution</H2>
      <P>
        As the UX/UI Designer, I translated the client requirements into
        connected user journeys and interfaces across the platform.
      </P>
      <P>My contribution included:</P>
      <CaseStudyList>
        <li>Structuring information architecture</li>
        <li>Mapping connected student and administrative journeys</li>
        <li>Defining interaction patterns</li>
        <li>Designing the competition and registration experience</li>
        <li>Designing the student dashboard and participation experience</li>
        <li>Designing the assessment and review experience</li>
        <li>Designing administrative workflows</li>
        <li>Creating consistent UI patterns across the platform</li>
      </CaseStudyList>
      <ImageSlot caption="A curated collection of your strongest final UI screens." />

      <H2>Outcome</H2>
      <P>
        The platform established a connected journey from competition
        discovery to paid registration and continued student
        participation.
      </P>
      <P>Students could:</P>
      <CaseStudyFlow
        steps={[
          "Discover competitions",
          "Choose a participation level",
          "Register and pay",
          "Manage activities",
          "Take assessments",
          "Review results",
        ]}
      />
      <P>
        Institutes gained a structured digital experience to support
        competition registration and the workflows required to manage the
        wider ecosystem.
      </P>
      <ImageSlot caption="Your strongest end to end flow, ideally showing competition discovery through registration and participation." />

      <H2>Reflection</H2>
      <P>
        This project shifted my thinking from designing individual
        screens to designing the relationships between workflows.
      </P>
      <P>
        The competition experience connected discovery, level selection,
        pricing, payment, and registration. The dashboard connected
        registration with continued participation. The exam experience
        connected preparation, assessment, review, and results. The admin
        experience powered the content and assessment workflows behind
        everything.
      </P>
      <P>The question I kept coming back to was:</P>
      <CaseStudyQuote>
        How does this part of the product connect to what the user needs
        to do next?
      </CaseStudyQuote>
      <P>
        That became the foundation for designing the experience as one
        connected system rather than a collection of separate features.
      </P>
    </CaseStudyHero>
  );
}
