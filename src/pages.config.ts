/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 * 
 * Usage:
 * ```astro
 * ---
 * import BaseLayout from '../layouts/BaseLayout.astro';
 * import SEO from '../components/SEO.astro';
 * import { pagesConfig } from '../pages.config';
 * ---
 * 
 * <BaseLayout>
 *   <SEO 
 *     slot="head"
 *     title={pagesConfig.projects.title}
 *     description={pagesConfig.projects.description}
 *   />
 *   <!-- Page content -->
 * </BaseLayout>
 * ```
 * 
 * @module pages.config
 */

/**
 * Page metadata interface
 */
interface PageMeta {
  /** Page title (used in browser tab and SEO) */
  title: string;
  
  /** Page description (used in meta tags and SEO) */
  description: string;
  
  /** Page heading (displayed as h1, optional - defaults to title) */
  heading?: string;
  
  /** Page intro text (displayed below heading, optional) */
  intro?: string;
}

/**
 * Pages configuration object
 * 
 * Contains metadata for all static pages. Dynamic pages (like individual
 * project or article pages) generate their own metadata from content.
 */
export const pagesConfig = {
  /**
   * Home page (/)
   * Note: Home page uses siteConfig for title/description as it represents the site itself
   */
  home: {
    title: 'Home',
    description: 'Engineering leader specializing in system architecture, technical decision-making, and delivering measurable business impact.',
  },
  
  /**
   * Projects listing page (/projects)
   */
  projects: {
    title: 'Projects',
    description: 'Data analysis projects showcasing problem-solving approach, analytical methods, and measurable impact across various domains.',
    heading: 'Projects',
    intro: 'Projects that demonstrate how I approach data problems, apply analytical methods, and deliver actionable insights. Each project tells the story of the challenge, the data, the analysis performed, and the outcomes achieved.',
  },

  
  /**
   * Journey timeline page (/journey)
   */
  journey: {
    title: 'Journey - Career Growth & Learning Timeline',
    description: 'A chronological timeline of my professional journey, highlighting key milestones, learning moments, and career transitions that shaped my growth as a Data Analyst.',
    heading: 'Journey',
    intro: 'A timeline of my professional growth and learning progression. This isn\'t a resume—it\'s a story of how I\'ve evolved as a Data Analyst, the pivotal moments that shaped my thinking, and the skills I\'ve developed along the way.',
  },
  
  /**
   * Uses/tools page (/uses)
   */
  uses: {
    title: 'Uses - Tools & Tech Stack',
    description: 'A comprehensive list of the tools and technologies I use for development work.',
    heading: 'Uses',
    intro: 'A transparent look at the tools and technologies that power my development workflow. This page documents what I use and why, helping other engineers discover useful tools and understand my technical context.',
  },
  
  /**
   * Contact page (/contact)
   */
  contact: {
    title: 'Contact - Get in Touch',
    description: 'Get in touch to discuss opportunities, collaborations, or technical challenges.',
    heading: 'Let\'s Talk',
  },
} as const;

/**
 * Type export for the pages configuration
 */
export type PagesConfig = typeof pagesConfig;

/**
 * Type export for a single page metadata
 */
export type PageConfig = PageMeta;
