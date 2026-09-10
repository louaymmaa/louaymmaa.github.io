export type Project = {
  slug: string;
  title: string;
  year: string;
  /** One line shown on the card. */
  summary: string;
  /** Short case study — a few sentences, honest about scope. */
  problem: string;
  build: string;
  learned: string;
  stack: string[];
  repo?: string;
  demo?: string;
  /** Path under /public for the card image, or null for a text-only card. */
  image?: string | null;
  /** Hidden until the content is confirmed with real details. */
  draft?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'storage-management-system',
    title: 'Storage Management System',
    year: '2025',
    summary:
      'Bilingual (Arabic / English) web app for tracking storage items, with a login and a dashboard UI.',
    problem:
      'A Web Engineering course project: build a small internal tool to record and track storage items, usable by Arabic and English speakers on both phone and desktop.',
    build:
      'I designed the screens and built the front end with HTML, CSS and vanilla JavaScript, plus a PHP/MySQL back end for the data layer. The interface switches fully between Arabic (right-to-left) and English (left-to-right), and the layout is responsive down to mobile. The public demo is front-end only — sign in with username "admin" and password "password".',
    learned:
      'Getting a layout to mirror cleanly between RTL and LTR is a real design constraint, not an afterthought. If I rebuilt it today I would use a component framework and a proper API instead of page-by-page PHP.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'RTL / i18n'],
    repo: 'https://github.com/louaymmaa/storage-management-website',
    // TODO(louay): enable GitHub Pages on that repo and put the URL here.
    demo: undefined,
    image: null,
  },
  {
    slug: 'ai-chatbot-student-helper',
    title: 'AI Chatbot — Student Helper',
    year: '2025',
    summary:
      'A Python assistant that answers common student questions about the summer semester.',
    problem:
      'New students kept asking the same questions about the summer semester. I wanted a small program that could answer the most frequent ones instantly.',
    build:
      'A Python command-line assistant that matches a student’s question against a set of known intents and returns the right answer. This version is rule-based rather than machine-learning — it is the starting point for the AI-engineering direction I am now studying.',
    learned:
      'Even a rule-based bot forces you to think about intent matching, fallbacks and phrasing. The natural next step is replacing the hand-written rules with embeddings or a small language model.',
    stack: ['Python', 'CLI', 'Intent matching'],
    repo: 'https://github.com/louaymmaa/ai-chatbot-student-helper',
    image: null,
  },
  {
    slug: 'sign-language-app',
    title: 'Sign Language App',
    year: '2026',
    summary: 'A Flutter app around sign language.',
    problem: 'TODO(louay): what problem does it solve / who is it for?',
    build: 'TODO(louay): what did you build, and is there any ML / model in it?',
    learned: 'TODO(louay): one honest lesson.',
    stack: ['Flutter', 'Dart'],
    repo: 'https://github.com/louaymmaa/sign-language-app',
    image: null,
    draft: true,
  },
  {
    slug: 'calori',
    title: 'Calori',
    year: '2026',
    summary: 'TODO(louay): one-line description.',
    problem: 'TODO(louay).',
    build: 'TODO(louay).',
    learned: 'TODO(louay).',
    stack: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/louaymmaa/Calori',
    image: null,
    draft: true,
  },
];

export const featuredProjects = projects.filter((p) => !p.draft);

/** Small repos shown as a compact "more on GitHub" strip — name + link only. */
export const moreRepos: { name: string; repo: string; language: string }[] = [
  {
    name: 'sign-language-app',
    repo: 'https://github.com/louaymmaa/sign-language-app',
    language: 'Dart / Flutter',
  },
  {
    name: 'Calori',
    repo: 'https://github.com/louaymmaa/Calori',
    language: 'HTML / CSS / JS',
  },
];
