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
};

export const projects: Project[] = [
  {
    slug: 'coffee-sales-analysis',
    title: 'Coffee sales analysis & forecasting',
    shortTitle: 'Coffee sales',
    role: 'Data analysis / machine learning',
    year: 2025,
    summary: 'An end-to-end look at sales behavior, seasonal demand, and the products that keep a coffee business moving.',
    outcome: 'A forecasting system that reached 94.1% short-term accuracy and made inventory planning easier to reason about.',
    accent: 'coral',
    metrics: [
      { value: '94.1%', label: 'forecast accuracy' },
      { value: '0.56', label: 'R² score' },
      { value: '2.95', label: 'mean absolute error' },
    ],
    stack: ['Python', 'pandas', 'Scikit-learn', 'Jupyter'],
  },
  {
    slug: 'best-city-for-golf',
    title: 'Best city for golf in the US',
    shortTitle: 'Best golf city',
    role: 'Data analysis',
    year: 2025,
    summary: 'A data pipeline and ranking system combining course access, quality, climate, and geography across the United States.',
    outcome: '500+ cities and 15,000+ courses compared through a transparent, repeatable scoring system.',
    accent: 'blue',
    metrics: [
      { value: '500+', label: 'cities analyzed' },
      { value: '15k+', label: 'courses processed' },
      { value: '3', label: 'data formats' },
    ],
    stack: ['Python', 'SQLite', 'Parquet', 'Matplotlib'],
  },
];