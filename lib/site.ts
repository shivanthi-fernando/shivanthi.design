/**
 * Central content + config for the portfolio.
 * Swap the placeholder copy, links and project data here — every section
 * reads from this file so there is a single source of truth.
 */

export const site = {
  name: "Shivanthi Fernando",
  shortName: "Shivanthi",
  role: "UX Designer",
  email: "wscsfernando@gmail.com",
  // Update this to your scheduling link (Cal.com / Calendly / etc.)
  bookingUrl: "https://cal.com/shivanthi",
  location: "Available worldwide · Remote",
  availability: "Open to work — limited project availability",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shivanthi-fernando-0146a21a8/", handle: "in/shivanthi" },
    { label: "Dribbble", href: "https://dribbble.com/shivanthi", handle: "shivanthi" },
    { label: "Medium", href: "https://medium.com/@wscsfernando", handle: "shivanthi" },
  ],
};

// All four items live on the home page now — Home is the top of the page,
// the rest are in-page anchors. Clicking any of them from another route
// (e.g. a case study or /about) navigates to "/" and then jumps to the
// section; the standalone /about page itself is still reachable, just only
// via the "Learn more" link in the About section, not from this nav.
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blogs", href: "/#blogs" },
];

export type Pastel = "butter" | "mint" | "lavender" | "peach" | "sky" | "blush";

/**
 * Writing — a mini-series on UX psychology principles, published on Medium.
 * Listed newest → oldest (reverse of the order the series was written in).
 */
export const articles: {
  title: string;
  desc: string;
  href: string;
  image: string;
}[] = [
    {
      title: "Use of Color Psychology to Enhance User Experience in Mobile Apps",
      desc: "How color choices influence user emotion and behavior, and how to use that deliberately in mobile app design.",
      href: "https://medium.com/@wscsfernando/use-of-color-psychology-to-enhance-user-experience-in-mobile-apps-5247d16d2b1e",
      image: "/blogs/blog_one.png",
    },
    {
      title: "Using Hick's Law to Simplify User Decisions",
      desc: "Why reducing the number of choices presented at once helps users decide faster and with more confidence.",
      href: "https://medium.com/@wscsfernando/using-hicks-law-to-simplify-user-decisions-a-ux-psychology-principle-451dfef1d68c",
      image: "/blogs/blog_two.png",
    },
    {
      title: "Optimizing the User Interaction with Fitt's Law",
      desc: "How the size and placement of interactive elements affects how quickly and accurately users can reach them.",
      href: "https://medium.com/@wscsfernando/optimizing-the-user-interaction-with-fitts-law-50012e8fb4bc",
      image: "/blogs/blog_three.png",
    },
    {
      title: "The Importance of Miller's Law for UX Design",
      desc: "Why designing around human memory limits helps users process information without feeling overwhelmed.",
      href: "https://medium.com/@wscsfernando/the-importance-of-millers-law-for-ux-design-164955147fe8",
      image: "/blogs/blog_four.png",
    },
    {
      title: "Simplifying User Interfaces with the Law of Proximity",
      desc: "How grouping related elements by closeness helps users read interfaces faster and with less effort.",
      href: "https://medium.com/@wscsfernando/simplifying-user-interfaces-with-the-law-of-proximity-9d994015f82a",
      image: "/blogs/blog_five.png",
    },
  ];
