export const navigation = [
  { href: "#about", label: "About" },
  { href: "#tracks", label: "Tracks" },
  { href: "#schedule", label: "Schedule" },
  { href: "#faq", label: "FAQ" },
] as const;

export const tracks = [
  {
    number: "01",
    title: "Useful systems",
    copy: "Build a tool that removes friction from an everyday workflow. Start with a real problem and finish with something people can use.",
  },
  {
    number: "02",
    title: "Playful interfaces",
    copy: "Turn an unusual interaction into a clear, memorable experience. Delight matters, but the idea still has to work.",
  },
  {
    number: "03",
    title: "Open exploration",
    copy: "Bring the idea that does not fit a category. Explain the question, show your decisions, and make a convincing prototype.",
  },
  {
    number: "04",
    title: "Unlikely teams",
    copy: "Combine skills and perspectives. A surprising collaboration can be the strongest part of the work.",
  },
] as const;

export const schedule = [
  ["Opening", "Meet the room, hear the brief, and form a team."],
  ["Build", "Research, sketch, code, test, and keep the scope honest."],
  ["Checkpoint", "Share a rough demo and get direct feedback."],
  ["Final demos", "Present the problem, the prototype, and what you learned."],
] as const;

export const criteria = [
  ["Clarity", "Is the problem specific and the solution easy to understand?"],
  ["Craft", "Does the prototype feel considered in both code and experience?"],
  ["Usefulness", "Would this make a meaningful difference for its intended user?"],
  ["Learning", "Did the team test assumptions and respond to what it found?"],
] as const;

export const faqs = [
  ["Who is Flat Hack 604 for?", "Developers, designers, researchers, storytellers, and first-time hackers. Strong teams mix perspectives rather than titles."],
  ["Do I need a team?", "No. You can arrive with collaborators or meet people during team formation at the opening session."],
  ["What should I bring?", "Bring a laptop, charger, any tools you work best with, and a willingness to show unfinished work early."],
  ["When will event details be announced?", "The confirmed date, venue, participation format, and registration link will be published here together."],
] as const;
