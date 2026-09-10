export type Entry = {
  role: string;
  org: string;
  period: string;
  points: string[];
  /** Flag entries that still need real detail from Louay. */
  needsDetail?: boolean;
};

export const experience: Entry[] = [
  {
    role: 'Junior Software Engineer Intern',
    org: 'Resal',
    period: 'Summer 2025 · 8 weeks',
    points: [
      'Backend Development & Feature Delivery: Contributed to backend features and bug fixes using FastAPI, SQLAlchemy, Redis, and Kafka/Faust, while working on real development tickets within the engineering team.',
      'Testing & Code Quality: Wrote and maintained automated tests using PyTest, helped validate application behavior, and improved reliability through debugging and code refinement.',
      'Team Collaboration & Development Workflow: Worked within an Agile software team, using Git, pull requests, code reviews, and Docker Compose, while participating in daily discussions and collaborating with engineers to deliver assigned tasks.',
    ],
    needsDetail: true,
  },
  {
    role: 'Freelance Web Developer',
    org: 'Self-employed',
    period: '2024 — present',
    points: [
      'Designed and built responsive websites for individual clients end to end.',
      'Full-Stack Development: Built responsive websites and web applications using modern frontend technologies, backend APIs, and databases.',
      'Deployment & Optimization: Managed deployment, hosting, performance optimization, SEO, and cross-device testing.',
      'Client Collaboration: Worked directly with clients to understand requirements, deliver tailored solutions, provide updates, and support project handoff.'
    ],
    needsDetail: true,
  },
  {
    role: 'Vice Leader',
    org: 'Programming Club (PClub), King Khalid University',
    period: '2024 — 2026',
    points: [
      'Helped run the club and organise its competitive-programming practice sessions and events.',
      'Supported members preparing for programming contests, drawing on my own competition experience.',
    ],
  },
];

export const education = {
  degree: 'B.Sc. in Computer Science',
  school: 'King Khalid University (KKU)',
  period: 'Graduated June 2026',
  gpa: '4.23 / 5.00',
};

export const achievements: string[] = [
  '1st Place — KKU Programming Club Competitive Programming Competition (team, C++, 2024)',
  'Graduated with a 4.23 / 5.00 GPA in Computer Science',
];
