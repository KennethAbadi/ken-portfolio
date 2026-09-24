import chatterBoxPhoto from '../assets/projects/Chatterbox.png';
import camelCamelCamelPhoto from '../assets/projects/DromedaryDromedaryDromedary.png';
import gravShiftTetrisPhoto from '../assets/projects/GravshiftTetris.png';
import herdPhoto from '../assets/projects/Herd.png';
import relationshipWrappedPhoto from '../assets/projects/RelationshipWrapped.png';
import charityHubPhoto from '../assets/projects/CharityHub.png';
import coffeeSalesAnalysisPhoto from '../assets/projects/CoffeeSales.png';
import golfStatsPhoto from '../assets/projects/GolfAnalysis.png';


export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  role: string;
  year: number;
  summary: string;
  /** Longer "About" paragraph shown on the project's case-study page. */
  description: string;
  /** Key findings / features shown as a checklist on the case-study page. */
  features: string[];
  accent: string;
  stack: string[];
  /** External link to the live project or repo. Left unset until filled in. */
  link?: string;
  /** Optional project photo. Import an image from src/assets/projects and assign it here. */
  image?: string;
};

// To add a photo for a project: drop an image in src/assets/projects, then
// `import projectPhoto from '../assets/projects/project.png';`
// and set `image: projectPhoto` on that project's entry below.

export const projects: Project[] = [
  {
    slug: 'relationship-wrapped',
    title: 'Relationship Wrapped',
    shortTitle: 'Wrapped',
    role: 'Full-stack developer / Personal Project',
    year: 2026,
    summary:
      'A private, shareable relationship journal that transforms memories, photos, and milestones into a personalized annual Wrapped experience.',
    description:
      'Built an end-to-end relationship memory platform with authentication, onboarding, partner joining, memory management, photo uploads, Wrapped generation, private viewing, and share-link access controls.',
    features: [
      'Authentication, onboarding, and partner-joining flows for two-person accounts',
      'Memory management with photo uploads and milestone tagging',
      'Automated annual Wrapped generation from stored memories',
      'Private viewing plus shareable, permission-controlled links',
    ],
    accent: 'coral',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Prisma',
      'Supabase',
      'Zod',
    ],
    image: relationshipWrappedPhoto,
  },
  {
    slug: 'herd',
    title: 'Herd',
    shortTitle: 'Herd',
    role: 'Full-stack developer / Co-developer',
    year: 2026,
    summary:
      'A social music discovery platform for tracking albums and songs, writing reviews, building curated lists, and connecting with other listeners.',
    description:
      'Delivered a full-stack music community experience with authentication, social activity feeds, ratings, reviews, user profiles, search, Spotify integration, and personalized discovery.',
    features: [
      'Social activity feed for album and song reviews',
      '1–5 star rating system with written reviews and curated lists',
      'Spotify API integration for track and album metadata',
      'User profiles, search, and personalized discovery',
    ],
    accent: 'coral',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Prisma',
      'NextAuth.js',
      'Spotify API',
    ],
    image: herdPhoto,
  },
  {
    slug: 'charityhub',
    title: 'CharityHub',
    shortTitle: 'CharityHub',
    role: 'Full-stack developer / capstone project',
    year: 2025,
    summary:
      'A role-based charity management platform for events, donations, and contact management across administrators, vendors, organizations, and users.',
    description:
      'Delivered a full-stack application with secure authentication, role-based access, and a final course grade of 96%.',
    features: [
      'Role-based access across administrators, vendors, organizations, and users',
      'Event and donation management workflows',
      'Secure authentication and authorization',
      'Capstone project — 96% final grade, 5-person team',
    ],
    accent: 'coral',
    stack: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server'],
    image: charityHubPhoto,
  },
  {
    slug: 'coffee-sales-analysis',
    title: 'Coffee sales analysis & forecasting',
    shortTitle: 'Coffee sales',
    role: 'Data analysis / machine learning',
    year: 2025,
    summary:
      'Used a 381-day coffee sales dataset to identify demand patterns, measure seasonality, and evaluate whether historical sales could predict future outcomes.',
    description:
      'Built a forecasting workflow that achieved ~94.1% short-term accuracy and highlighted a 40%+ sales surge after the New Year.',
    features: [
      '~94.1% short-term forecast accuracy (R² 0.56)',
      'Identified a 40%+ sales surge following the New Year',
      'Rolling-average features drove ~73% of model importance',
      '381-day sales dataset cleaned and engineered for modeling',
    ],
    accent: 'blue',
    stack: ['Python', 'pandas', 'NumPy', 'Scikit-learn', 'Jupyter'],
    image: coffeeSalesAnalysisPhoto,
  },
  {
    slug: 'golf-course-city-analysis',
    title: 'Golf course & city analysis',
    shortTitle: 'Golf city analysis',
    role: 'Data engineering / analysis',
    year: 2025,
    summary:
      'Combined golf-course, geographic, climate, and state-level information to analyze which US cities are best suited to golfers.',
    description:
      'Processed 15,000+ courses and built a repeatable data pipeline across raw JSON, Parquet, and SQLite storage.',
    features: [
      'Processed 15,000+ golf courses across 500+ US cities',
      'Repeatable pipeline across raw JSON, Parquet, and SQLite',
      'Combined geographic, climate, and state-level datasets',
      'Ranked cities by golf suitability score',
    ],
    accent: 'lime',
    stack: ['Python', 'Pandas', 'JSON', 'Parquet', 'SQLite'],
    image: golfStatsPhoto,
  },
  {
    slug: 'chatterbox',
    title: 'ChatterBox',
    shortTitle: 'ChatterBox',
    role: 'Full-stack developer / team project',
    year: 2023,
    summary:
      'A Discord-inspired communication platform with real-time channels, direct messaging, friend management, user profiles, and role-based permissions.',
    description:
      'Built and tested a full-stack React application backed by Firebase, supporting authenticated users, channel administration, direct messages, and collaborative communication features.',
    features: [
      'Real-time channels with role-based administration',
      'Direct messaging and friend management',
      'Firebase-backed authentication and user profiles',
      '20 component test suites across a 5-person team',
    ],
    accent: 'coral',
    stack: [
      'React',
      'JavaScript',
      'Firebase',
      'Redux Toolkit',
      'Tailwind CSS',
      'Sass',
      'Vitest',
    ],
    image: chatterBoxPhoto,
  },
  {
    slug: 'grav-shift-tetris',
    title: 'Grav-Shift Tetris',
    shortTitle: 'Gravity Tetris',
    role: 'Unity game developer',
    year: 2025,
    summary:
      'Built a Tetris-inspired puzzle game where gravity shifts in four directions, challenging players to plan piece placement, rotations, line clears, and board movement.',
    description:
      'Developed a complete Unity 2D game with tetromino rotation, wall kicks, ghost-piece previews, hard drops, dynamic gravity, line clearing, scoring, pause and restart flows, audio feedback, screen shake, and animated UI.',
    features: [
      'Four-directional dynamic gravity shifting gameplay',
      'Tetromino rotation, wall kicks, and ghost-piece previews',
      'Line clearing, scoring, and hard-drop mechanics',
      'Audio feedback, screen shake, and animated UI',
    ],
    accent: 'orange',
    stack: [
      'Unity',
      'C#',
      '2D Tilemap',
      'TextMesh Pro',
      'DOTween',
      'Universal Render Pipeline',
    ],
    image: gravShiftTetrisPhoto,
  },
  {
    slug: 'camelcamelcamel-clone',
    title: 'CamelCamelCamel Clone',
    shortTitle: 'Price tracker',
    role: 'Full-stack developer',
    year: 2022,
    summary:
      'Built a full-stack Amazon price-tracking platform with product search, category filtering, user authentication, price data, reviews, item tracking, and administrative tools.',
    description:
      'Developed a PHP and MySQL web application with AJAX-powered product loading, account management, review functionality, click tracking, and database-backed administration.',
    features: [
      'AJAX-powered product search and category filtering',
      'User accounts with reviews and price-tracking',
      'Click tracking and database-backed administration',
      'MySQL-backed product and pricing history',
    ],
    accent: 'orange',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'AJAX'],
    image: camelCamelCamelPhoto,
  },
];