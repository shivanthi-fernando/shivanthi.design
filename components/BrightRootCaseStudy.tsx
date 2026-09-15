import Link from "next/link";
import { SectionHead } from "./ui";
import { ArrowRight } from "./icons";
import Reveal from "./Reveal";
import {
  CaseStudyH2 as H2,
  CaseStudyH3 as H3,
  CaseStudyP as P,
  CaseStudyList,
  CaseStudyFacts,
  CaseStudyImageSlot as ImageSlot,
} from "./case-study-ui";

const examFlow = [
  "System check",
  "Exam instructions",
  "Question answering",
  "Review answers",
  "Submit",
  "Results",
];

export default function BrightRootCaseStudy() {
  return (
    <section className="pb-20 pt-28 sm:pb-28 sm:pt-32 md:pt-36">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Back to Projects
          </Link>
        </Reveal>

        <div className="mt-6">
          <SectionHead
            label="BrightRoot"
            title="BrightRoot"
            intro="Designing an institute platform and student exam experience. BrightRoot connects institutes with students through public institute pages, student assessments, and administrative tools — this project covered the first-phase public experience, a student exam portal, and an admin workspace for managing questions and exams."
          />
        </div>

        <div className="max-w-2xl">
          <CaseStudyFacts role="UX/UI Designer" projectType="Client-requested product design" />

          <H2>The Challenge</H2>
          <P>
            Educational institutes need a way to present their identity,
            share information with prospective students, and manage
            assessments through a centralized platform. Students should be
            able to discover institutes and complete exams through a clear,
            structured experience, while lecturers need tools to create and
            manage exam content.
          </P>
          <P>
            The client requested designs for these experiences, with a
            focus on the public-facing institute page, the student exam
            journey, and the administrative workflows.
          </P>

          <H2>1. Designing the Public Institute Experience</H2>
          <H3>Helping Institutes Present Their Identity Online</H3>
          <P>
            The public landing page allows each institute registered on
            BrightRoot to create a branded online presence. It serves as an
            entry point for prospective students and visitors to learn
            about the institute, explore its offerings, discover public
            events, and register as a student.
          </P>
          <P>
            The first phase focused on the public-facing experience.
            Student-specific events, quizzes, exams, and other
            authenticated features were intentionally excluded from this
            scope.
          </P>

          <H3>Key User Journeys</H3>
          <CaseStudyList>
            <li>Discover an institute and understand what it offers.</li>
            <li>
              Explore upcoming workshops, competitions, social events, and
              community activities.
            </li>
            <li>Register as a student when interested in joining the institute.</li>
          </CaseStudyList>

          <ImageSlot caption="The public institute landing page — an entry point for prospective students to discover the institute and register." />

          <H2>2. Designing the Student Exam Portal</H2>
          <H3>Making Online Exams Easier to Navigate</H3>
          <P>
            The exam portal was designed to support a structured,
            MCQ-based assessment experience. Students need to complete a
            system and environment check before starting, answer different
            types of questions, navigate between questions, and submit
            their answers to receive their results.
          </P>
          <P>The design was based on the client&rsquo;s requirements and the following assumptions:</P>
          <CaseStudyList>
            <li>Each student has two attempts to complete an exam.</li>
            <li>Students must complete an environment and system check before starting.</li>
            <li>Exams include single-select, multi-select, drag-and-drop, and image-based questions.</li>
            <li>Students can flag questions, skip questions, and return to previously viewed questions.</li>
            <li>Results are displayed within a few seconds after submission, before the student leaves the results screen.</li>
          </CaseStudyList>

          <H3>Exam Flow</H3>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {examFlow.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-line-strong bg-card px-3 py-1.5 text-sm font-medium text-ink">
                  {step}
                </span>
                {i < examFlow.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted" />
                )}
              </span>
            ))}
          </div>
          <P>
            The exam experience was designed to support different
            answering behaviors while keeping the overall flow consistent.
            Students can move back and forth between questions, flag
            questions for review, and revisit unanswered or uncertain
            questions before submitting.
          </P>

          <H3>Question Types</H3>
          <CaseStudyList>
            <li>
              <strong className="font-semibold text-ink">Single-select:</strong>{" "}
              Select one answer from a list of options.
            </li>
            <li>
              <strong className="font-semibold text-ink">Multi-select:</strong>{" "}
              Select multiple answers when more than one option is correct.
            </li>
            <li>
              <strong className="font-semibold text-ink">Drag-and-drop:</strong>{" "}
              Arrange or match items through a direct manipulation
              interaction.
            </li>
            <li>
              <strong className="font-semibold text-ink">Image-based:</strong>{" "}
              Answer questions that include visual content.
            </li>
          </CaseStudyList>

          <H3>Navigation and Review</H3>
          <P>
            A key part of the exam experience is giving students control
            over how they answer questions. The design supports forward
            and backward navigation, skipping questions, and flagging
            questions for later review.
          </P>
          <P>
            This helps students manage their time and return to questions
            they are unsure about instead of being forced into a strictly
            linear flow.
          </P>

          <H3>Submission and Results</H3>
          <P>
            Before submitting, students can review their answers and
            confirm that they are ready to complete the exam. After
            submission, the results are shown on the results screen,
            allowing students to see their outcome without leaving the
            exam experience.
          </P>

          <ImageSlot caption="The student exam portal — system check, question answering, and the results screen." />

          <H2>3. Designing the Admin Workspace</H2>
          <H3>Supporting Lecturers in Managing Assessments</H3>
          <P>
            The admin section provides the tools lecturers need to manage
            the exam content and assessment process. The design covers the
            question management and exam management workflows requested by
            the client.
          </P>

          <H3>Core Admin Features</H3>
          <CaseStudyList>
            <li>
              <strong className="font-semibold text-ink">Question management:</strong>{" "}
              Add new questions and manage existing question content.
            </li>
            <li>
              <strong className="font-semibold text-ink">Question banks:</strong>{" "}
              Create and organize collections of questions for reuse across
              exams.
            </li>
            <li>
              <strong className="font-semibold text-ink">Exam management:</strong>{" "}
              View and manage the exams available in the system.
            </li>
            <li>
              <strong className="font-semibold text-ink">Student answers:</strong>{" "}
              Access submitted student responses for review.
            </li>
          </CaseStudyList>

          <H3>Design Approach</H3>
          <P>
            The admin experience was structured around the relationship
            between questions, question banks, exams, and student answers.
            This helps create a clear foundation for managing assessment
            content as the platform grows.
          </P>

          <ImageSlot caption="The admin workspace — managing questions, question banks, exams, and student answers." />

          <H2>Design Decisions</H2>
          <H3>Supporting Different User Needs</H3>
          <P>
            BrightRoot serves three main audiences: prospective students
            and visitors, students taking exams, and lecturers managing
            assessments. Each experience was designed around its primary
            task rather than treating the platform as one generic
            interface.
          </P>

          <H3>Balancing Flexibility and Structure</H3>
          <P>
            The exam portal supports different question types and flexible
            navigation, while the admin section organizes complex content
            management tasks into distinct areas. The public page provides
            a simpler, discovery-focused experience.
          </P>

          <H3>Designing for Future Phases</H3>
          <P>
            The first phase of the public platform intentionally excludes
            authenticated student features. Keeping the public experience
            focused allows future student-specific features to be
            introduced without making the initial landing page
            unnecessarily complex.
          </P>

          <H2>Reflection</H2>
          <P>
            This project gave me the opportunity to design multiple
            experiences within an education platform, from a public-facing
            institute page to a structured exam journey and an admin
            workspace.
          </P>
          <P>
            Working from client requirements, I translated the requested
            functionality into user flows and interface designs across
            different user groups. The project also helped me think about
            how public discovery, student assessments, and administrative
            workflows can fit together within one product.
          </P>
          <P>
            The main takeaway was understanding how to design a consistent
            product experience while adapting the interaction patterns to
            the needs of each user.
          </P>
        </div>
      </div>
    </section>
  );
}
