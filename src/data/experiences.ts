export type Experience = {
  slug: string;
  title: string;
  organization: string;
  role: string;
  timeline: string;
  summary: string;
  overview: string;
  responsibilities: string[];
  technicalContributions: string[];
  techStack: string[];
  dataDomain: string[];
  results: string[];
  stakeholders: string[];
  outcome: string;
  accent: string;
  metrics: { value: string; label: string }[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    slug: 'wildfire-risk-sensor-analysis',
    title: 'Wildfire Risk & Environmental Sensor Analysis',
    organization: 'UBC & Rogers',
    role: 'Co-op Undergraduate Research Assistant',
    timeline: 'May 2024 – August 2024',
    summary:
      '',
    overview:
      'Worked on a wildfire research and data-analysis project focused on using environmental and IoT sensor data to better understand wildfire conditions and improve forecasting. The role involved analyzing large volumes of sensor readings from wildfire-prone areas, improving data reliability, developing dashboards and visualizations, and communicating findings with wildfire response stakeholders.',
    responsibilities: [
      'Analyzed 10,000+ IoT sensor readings',
      'Worked with data from approximately 50 wildfire-prone locations',
      'Used Python and SQL for data analysis',
      'Investigated data accuracy and sensor reliability',
      'Worked with environmental scientists',
      'Conducted stakeholder interviews',
      'Worked with BC Wildfire Services and Kelowna fire teams',
      'Developed Power BI dashboards for wildfire response teams',
      'Contributed to improving forecast accuracy',
      'Helped reduce manual reporting effort',
      'Communicated technical findings to non-technical stakeholders',
    ],
    technicalContributions: [
      'Cleaned and analyzed environmental sensor data',
      'Used Python and SQL to investigate patterns and data quality',
      'Built 3 Power BI dashboards',
      'Investigated sensor reliability and data accuracy',
      'Worked with researchers and wildfire professionals to understand data and reporting requirements',
      'Collaborated with environmental scientists on data quality and sensor reliability',
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Microsoft Excel', 'Azure DevOps', 'Git'],
    dataDomain: [
      'IoT sensor data',
      'Weather data',
      'Wildfire conditions',
      'Fire Weather Index concepts',
      'Environmental monitoring',
      'Wildfire response',
    ],
    results: [
      'Contributed to a 30% increase in forecast accuracy',
      'Created 3 Power BI dashboards',
      'Dashboards were used by 3 wildfire response teams',
      'Reduced manual reporting effort by approximately 40%',
    ],
    stakeholders: ['BC Wildfire Services', 'Kelowna fire teams', 'Environmental scientists', 'University researchers'],
    outcome:
      'Contributed to a 30% increase in forecast accuracy and built 3 Power BI dashboards used by wildfire response teams.',
    accent: 'coral',
    metrics: [
      { value: '30%', label: 'forecast uplift' },
      { value: '10k+', label: 'sensor readings analyzed' },
      { value: '3', label: 'dashboards built' },
    ],
    stack: ['Python', 'pandas', 'NumPy', 'SQL', 'Power BI', 'Azure DevOps'],
  },
];
