export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  role: string;
  year: number;
  summary: string;
  outcome: string;
  accent: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  /** Optional project photo. Import a PNG from src/assets/projects and assign it here. */
  image?: string;
};

// To add a photo for a project: drop the PNG in src/assets/projects, then
// `import charityhubPhoto from '../assets/projects/charityhub.png';`
// and set `image: charityhubPhoto` on that project's entry below.

export const projects: Project[] = [
  {
    slug: 'charityhub',
    title: 'CharityHub',
    shortTitle: 'CharityHub',
    role: 'Full-stack developer / capstone project',
    year: 2025,
    summary:
      'A role-based charity management platform for events, donations, and contact management across administrators, vendors, organizations, and users.',
    outcome:
      'Delivered a full-stack application with secure authentication, role-based access, and a final course grade of 96%.',
    accent: 'coral',
    metrics: [
      { value: '96%', label: 'final grade' },
      { value: '5', label: 'person team' },
      { value: '100%', label: 'test coverage target' },
    ],
    stack: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server'],
  },
  {
    slug: 'coffee-sales-analysis',
    title: 'Coffee sales analysis & forecasting',
    shortTitle: 'Coffee sales',
    role: 'Data analysis / machine learning',
    year: 2025,
    summary:
      'Used a 381-day coffee sales dataset to identify demand patterns, measure seasonality, and evaluate whether historical sales could predict future outcomes.',
    outcome:
      'Built a forecasting workflow that achieved ~94.1% short-term accuracy and highlighted a 40%+ sales surge after the New Year.',
    accent: 'blue',
    metrics: [
      { value: '94.1%', label: 'forecast accuracy' },
      { value: '0.56', label: 'R² score' },
      { value: '73%', label: 'rolling-average importance' },
    ],
    stack: ['Python', 'pandas', 'NumPy', 'Scikit-learn', 'Jupyter'],
  },
  {
    slug: 'golf-course-city-analysis',
    title: 'Golf course & city analysis',
    shortTitle: 'Golf city analysis',
    role: 'Data engineering / analysis',
    year: 2025,
    summary:
      'Combined golf-course, geographic, climate, and state-level information to analyze which US cities are best suited to golfers.',
    outcome:
      'Processed 15,000+ courses and built a repeatable data pipeline across raw JSON, Parquet, and SQLite storage.',
    accent: 'lime',
    metrics: [
      { value: '15k+', label: 'courses analyzed' },
      { value: '500+', label: 'cities included' },
      { value: '3', label: 'data formats' },
    ],
    stack: ['Python', 'Pandas', 'JSON', 'Parquet', 'SQLite'],
  },
  {
    slug: 'personal-portfolio-website',
    title: 'Personal developer portfolio website',
    shortTitle: 'Portfolio',
    role: 'Web development / personal branding',
    year: 2025,
    summary:
      'A portfolio website to present projects, technical work, and writing in a centralized, polished online presence.',
    outcome:
      'Created a responsive site with project storytelling, hosted deployment, and a custom domain workflow for ongoing publishing.',
    accent: 'coral',
    metrics: [
      { value: '1', label: 'portfolio site' },
      { value: '4', label: 'content pillars' },
      { value: '∞', label: 'project updates' },
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages', 'Cloudflare'],
  },
];