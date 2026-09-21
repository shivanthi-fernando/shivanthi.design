import { CaseStudyHero } from "./CaseStudyHero";
import {
  CaseStudyH2 as H2,
  CaseStudyH3 as H3,
  CaseStudyP as P,
  CaseStudyList,
  CaseStudyFacts,
  CaseStudyFlow,
  CaseStudyImageSlot as ImageSlot,
} from "./case-study-ui";

export default function BrightRootCaseStudy() {
  return (
    <CaseStudyHero
      image="/projects/BrightRoot/BrightRoot_Thumbnail.png"
      label="BrightRoot"
      title="Turned fragmented education workflows into one connected experience"
      intro="Education experiences are often spread across different systems, making it harder for students to manage their activities and for institutes to manage the workflows behind them. The client wanted to solve this by creating a single platform that connected the student journey with the institute&rsquo;s administrative workflows."
    >
      <CaseStudyFacts
        facts={[
          { label: "Role", value: "UX/UI Designer" },
          { label: "Platform", value: "Web" },
          { label: "Tools", value: "Figma" },
          {
            label: "Scope",
            value: "Student experience · Assessment experience · Admin experience",
          },
        ]}
      />

      <H2>Problem</H2>
      <P>
        The client needed a platform that could bring disconnected education
        workflows into one coherent experience. Students needed a clear way
        to discover opportunities, participate in activities, manage their
        journey, and complete assessments, while administrators needed a
        structured way to manage the content and processes behind those
        experiences.
      </P>
      <P>
        The challenge was to{" "}
        <strong className="font-semibold text-ink">
          design a connected experience across these different workflows
          without making the product feel like a collection of separate
          tools.
        </strong>
      </P>

      <H2>Understanding the problem</H2>
      <P>
        I approached the requirements by looking at the{" "}
        <strong className="font-semibold text-ink">relationships between workflows</strong>,
        rather than treating each feature independently.
      </P>
      <P>The student&rsquo;s journey could be understood as:</P>
      <CaseStudyFlow steps={["Discover", "Register", "Participate", "Assess", "Review"]} />
      <P>While the administrative side supported that journey:</P>
      <CaseStudyFlow steps={["Create", "Manage", "Monitor", "Review"]} />
      <P>
        This helped establish a product structure where the different
        experiences had a clear relationship with each other. Instead of
        asking &ldquo;Where should this feature go?&rdquo;, I focused on:
      </P>
      <CaseStudyList>
        <li>What does the user need to know at this point?</li>
        <li>What action are they trying to take?</li>
        <li>What information do they need before taking that action?</li>
        <li>What happens after they complete it?</li>
        <li>How does this action connect to the rest of their journey?</li>
      </CaseStudyList>

      <H2>Design challenge 01: Too many things competing for attention</H2>
      <P>
        Once students register, they may have competitions, events, tasks,
        announcements, upcoming activities, and assessments to keep track
        of.
      </P>
      <P>
        Simply putting all of these features into navigation would create
        another problem:{" "}
        <strong className="font-semibold text-ink">
          students would have access to everything, but wouldn&rsquo;t
          necessarily know what matters right now.
        </strong>
      </P>
      <H3>The solution</H3>
      <P>
        I designed the student experience around{" "}
        <strong className="font-semibold text-ink">orientation rather than navigation</strong>.
      </P>
      <P>
        Instead of expecting students to visit different sections to
        understand their current activities, the experience brings the most
        relevant information together:
      </P>
      <CaseStudyList>
        <li>What I&rsquo;ve registered for</li>
        <li>What I need to do</li>
        <li>What&rsquo;s coming next</li>
        <li>What&rsquo;s changed</li>
      </CaseStudyList>
      <P>
        This created a central student experience where competitions,
        events, tasks, calendar information, statistics, and announcements
        could be understood together.
      </P>
      <P>
        The goal wasn&rsquo;t to surface every feature equally. It was to
        help students quickly understand{" "}
        <strong className="font-semibold text-ink">
          where they are and what needs their attention.
        </strong>
      </P>
      <ImageSlot caption="The student dashboard, bringing registrations, tasks, and announcements into one place." />

      <H2>Design challenge 02: Competition registration involved multiple decisions</H2>
      <P>
        Competition registration wasn&rsquo;t a simple &ldquo;Register&rdquo;
        action.
      </P>
      <P>
        Students could participate at different levels: District, State,
        Country, or Global, and each level had a different price.
      </P>
      <P>
        If those decisions were pushed too late into the registration
        process, students could end up making a commitment without fully
        understanding what they were selecting.
      </P>
      <H3>The solution</H3>
      <P>
        I treated{" "}
        <strong className="font-semibold text-ink">
          choice and context as part of the registration experience
        </strong>
        .
      </P>
      <P>
        Students could first understand the competition, compare the
        available levels, see the corresponding price, and then proceed
        with payment and registration. The experience therefore followed:
      </P>
      <CaseStudyFlow steps={["Understand", "Choose", "Confirm", "Pay", "Register"]} />
      <P>
        This made the registration decision more transparent instead of
        treating payment as the starting point.
      </P>

      <H2>Design challenge 03: The competition experience shouldn&rsquo;t end at registration</H2>
      <P>
        Registering for a competition is only one part of participation.
      </P>
      <P>
        Students also want to understand how they&rsquo;re performing
        relative to others. The platform therefore needed to support
        leaderboards across different competition levels.
      </P>
      <H3>The solution</H3>
      <P>
        I connected the competition experience to its different levels of
        participation. The leaderboard structure reflected the same
        hierarchy students encountered during registration:
      </P>
      <CaseStudyFlow steps={["District", "State", "Country", "Global"]} />
      <P>
        This created continuity between{" "}
        <strong className="font-semibold text-ink">what students registered for</strong>{" "}
        and{" "}
        <strong className="font-semibold text-ink">
          what they later used to understand their standing
        </strong>
        . Rather than treating the leaderboard as an isolated feature, it
        became another part of the competition journey.
      </P>

      <H2>Design challenge 04: Exams require preparation, focus, and confidence</H2>
      <P>
        An online exam creates a different type of UX problem. Students
        shouldn&rsquo;t have to figure out the system while they&rsquo;re
        already being assessed. Before answering the first question, they
        need to know:
      </P>
      <CaseStudyList>
        <li>What exam are they taking?</li>
        <li>What are the instructions?</li>
        <li>Is their environment ready?</li>
        <li>Are their details correct?</li>
        <li>What happens when they submit?</li>
      </CaseStudyList>
      <H3>The solution</H3>
      <P>
        I separated{" "}
        <strong className="font-semibold text-ink">preparation from assessment</strong>.
        The experience guides students through:
      </P>
      <CaseStudyFlow
        steps={["Understand", "Prepare", "Verify", "Answer", "Review", "Submit"]}
      />
      <P>
        The system and environment check happens before the assessment
        begins, followed by exam-detail verification. This creates a
        deliberate transition from &ldquo;getting ready&rdquo; to
        &ldquo;taking the exam.&rdquo;
      </P>
      <ImageSlot caption="The exam experience, covering system check, question answering, and submission review." />

      <H2>Design challenge 05: Different question types shouldn&rsquo;t create different experiences</H2>
      <P>The assessment needed to support multiple interaction types:</P>
      <CaseStudyList>
        <li>Multiple choice</li>
        <li>Drag and drop</li>
        <li>Short answers</li>
        <li>Long answers</li>
      </CaseStudyList>
      <P>
        The risk was creating four different interaction models that could
        make the exam feel inconsistent.
      </P>
      <H3>The solution</H3>
      <P>
        I treated the{" "}
        <strong className="font-semibold text-ink">question interaction as variable</strong>,
        while keeping the surrounding exam experience consistent. The way
        students provide an answer can change depending on the question,
        but the overall structure, navigation, and mental model remain
        familiar.
      </P>
      <P>
        This allows students to focus on the{" "}
        <strong className="font-semibold text-ink">content of the assessment</strong>,
        rather than learning a new interface for each question type.
      </P>

      <H2>Design challenge 06: Submission is a high-confidence moment</H2>
      <P>
        Completing the last question doesn&rsquo;t necessarily mean a
        student is ready to submit. There is a difference between{" "}
        <em>&ldquo;I&rsquo;ve answered everything&rdquo;</em> and{" "}
        <em>&ldquo;I&rsquo;m confident I&rsquo;m ready to submit.&rdquo;</em>
      </P>
      <H3>The solution</H3>
      <P>
        I introduced a dedicated review stage before submission. The
        experience becomes:
      </P>
      <CaseStudyFlow steps={["Answer", "Review", "Submit", "Results"]} />
      <P>
        This gives students an opportunity to check their responses before
        committing their attempt. After submission, the experience
        continues with results, the answer sheet, and leaderboard
        information, giving students a clear understanding of what happened
        after the assessment.
      </P>
      <ImageSlot caption="Results, answer sheet, and leaderboard, closing the loop after submission." />

      <H2>Design challenge 07: Administrative workflows power the student experience</H2>
      <P>
        The student experience depends on content being created and managed
        behind the scenes. Administrators need to create questions,
        organize them into question banks, manage exams, and review student
        answers.
      </P>
      <P>
        The challenge was to avoid designing the admin experience as a
        disconnected back office.
      </P>
      <H3>The solution</H3>
      <P>
        I mapped the relationship between administrative actions and
        student outcomes.
      </P>
      <CaseStudyFlow
        steps={["Create question", "Question bank", "Exam", "Student response", "Review"]}
      />
      <P>
        This relationship shaped the admin information architecture and
        helped ensure that the workflows supporting the student experience
        were logically connected.
      </P>
      <ImageSlot caption="The admin workspace, covering questions, question banks, exams, and student responses." />

      <H2>Designing the product as an ecosystem</H2>
      <P>
        Once these individual problems were considered together, the
        broader product model became clearer.
      </P>
      <H3>Student journey</H3>
      <CaseStudyFlow steps={["Discover", "Register", "Participate", "Assess", "Review"]} />
      <H3>Institute workflow</H3>
      <CaseStudyFlow steps={["Create", "Organize", "Publish", "Manage"]} />
      <H3>Assessment workflow</H3>
      <CaseStudyFlow
        steps={["Create questions", "Build exams", "Deliver assessments", "Review responses"]}
      />
      <P>
        These aren&rsquo;t separate products. They are different sides of
        the same ecosystem. The design therefore needed to maintain a
        consistent structure and interaction language while allowing each
        user type to focus on their own goals.
      </P>

      <H2>My contribution</H2>
      <P>
        This was a{" "}
        <strong className="font-semibold text-ink">client-led project</strong>, where I
        translated a broad set of product requirements into the UX/UI of
        the platform. My contribution focused on:
      </P>
      <CaseStudyList>
        <li>Turning requirements into connected user journeys</li>
        <li>Structuring the information architecture</li>
        <li>Identifying relationships between student and administrative workflows</li>
        <li>Defining the interaction model across different experiences</li>
        <li>Designing the student, assessment, and administrative experiences</li>
        <li>Establishing consistent UI and interaction patterns</li>
        <li>
          Making decisions around what information and actions should be
          prioritized at each stage
        </li>
      </CaseStudyList>
      <P>
        Rather than simply producing screens from a feature list, I focused
        on{" "}
        <strong className="font-semibold text-ink">
          how the different parts of the platform should work together to
          support the overall journey.
        </strong>
      </P>

      <H2>Outcome</H2>
      <P>
        The resulting design established a connected structure across the
        platform.
      </P>
      <H3>For students</H3>
      <CaseStudyFlow
        steps={["Discover opportunities", "Register", "Manage activities", "Take assessments", "Review results"]}
      />
      <H3>For administrators</H3>
      <CaseStudyFlow steps={["Create content", "Manage assessments", "Review student responses"]} />
      <P>
        This gave each user group a focused experience while keeping their
        workflows connected through the same underlying platform.
      </P>
      <P>
        The key outcome wasn&rsquo;t simply that the platform contained more
        features. It was that the different workflows had{" "}
        <strong className="font-semibold text-ink">a clear relationship to one another</strong>,
        creating a more coherent experience across the product.
      </P>

      <H2>Reflection</H2>
      <P>This project changed the way I think about complex products.</P>
      <P>
        When a product contains many features, the solution isn&rsquo;t
        necessarily to make every feature easier individually. The bigger
        question is{" "}
        <strong className="font-semibold text-ink">
          how those features relate to each other within the user&rsquo;s journey
        </strong>
        .
      </P>
      <P>
        For this project, that meant thinking beyond the competition page,
        the dashboard, the exam, or the admin portal individually. It meant
        designing the connections between them.
      </P>
      <CaseStudyFlow steps={["Discover", "Participate", "Assess", "Review"]} />
      <P>
        And ensuring that every part of the experience supported that
        journey. That became the core of my design approach throughout the
        project.
      </P>
    </CaseStudyHero>
  );
}
