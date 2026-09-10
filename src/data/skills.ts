export type SkillGroup = {
  label: string;
  note?: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages I code in',
    items: ['Java', 'Python', 'C++ (basics)'],
  },
  {
    label: 'Web',
    items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Astro'],
  },
  {
    label: 'Learning now',
    note: 'Actively working through these.',
    items: ['React', 'Node.js', 'AI / ML engineering'],
  },
  {
    label: 'CS foundation',
    items: [
      'Data structures & algorithms',
      'Competitive programming',
      'Object-oriented programming',
    ],
  },
  {
    label: 'Tools',
    items: ['Git & GitHub', 'VS Code', 'AI-assisted development', 'SQL (basic)'],
  },
  {
    label: 'Languages I speak',
    items: ['Arabic (native)', 'English (professional working)'],
  },
];
