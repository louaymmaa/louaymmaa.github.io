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
      'TODO(louay): what team / product did you work on?',
      'TODO(louay): what did you actually build or contribute (stack, tasks)?',
      'TODO(louay): anything that shipped or a measurable result?',
    ],
    needsDetail: true,
  },
  {
    role: 'Freelance Web Developer',
    org: 'Self-employed',
    period: '2024 — present',
    points: [
      'Designed and built responsive websites for individual clients end to end.',
      'TODO(louay): name one project you can link or describe (even anonymised).',
    ],
    needsDetail: true,
  },
  {
    role: 'Vice Leader',
    org: 'Programming Club (PClub), King Khalid University',
    period: '2024 — 2026',
    points: [
      'Helped run the university programming club and its competitive-programming activities.',
      'TODO(louay): confirm dates and add one concrete thing you organised or taught.',
    ],
    needsDetail: true,
  },
];

export const education = {
  degree: 'B.Sc. in Computer Science',
  school: 'King Khalid University (KKU)',
  location: 'Abha, Saudi Arabia',
  period: 'Graduated June 2026',
  gpa: '4.23 / 5.00',
};

export const achievements: string[] = [
  '1st Place — KKU Programming Club Competitive Programming Competition (team, C++, 2024)',
  'Graduated with a 4.23 / 5.00 GPA in Computer Science',
];
