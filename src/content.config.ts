/**
 * Content Collections Configuration
 * 
 * Defines all content collections for the site with their schemas and validation rules.
 * Uses Astro's Content Collections API with Zod for type-safe content management.
 * 
 * Collections:
 * - projects: Case studies with structured narrative format
 * - journey: Career timeline entries
 * - uses: Tools, stack, and environment documentation
 * - testimonials: Endorsements and recommendations
 * 
 * All collections use the glob loader to read MDX files from their respective directories.
 * Schemas enforce data structure and provide TypeScript types throughout the application.
 * 
 * @module content.config
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Projects Collection
 * 
 * Data analysis projects following a narrative format: Overview → Problem → 
 * Constraints → Approach → Tech Stack → Impact → Learnings.
 * 
 * Features:
 * - Required narrative sections for consistent storytelling
 * - Impact metrics (quantitative and qualitative)
 * - Featured flag for homepage showcase
 * - Optional custom order for manual curation
 * - Related project slugs for cross-referencing
 */
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    /** Project title */
    title: z.string(),
    
    /** Your role in the project */
    role: z.string(),
    
    /** Year the project was completed */
    year: z.number(),
    
    /** Project duration (e.g., "3 months", "1.5 years") */
    duration: z.string().optional(),
    
    /** Team size for scope context */
    teamSize: z.number().optional(),
    
    /** Brief summary of outcomes and impact */
    outcomeSummary: z.string(),
    
    /** High-level project overview */
    overview: z.string(),
    
    /** Problem being addressed */
    problem: z.string(),
    
    /** Project constraints and limitations */
    constraints: z.array(z.string()),
    
    /** Solution approach and strategy */
    approach: z.string(),
    
    /** Technologies and frameworks used */
    techStack: z.array(z.string()),
    
    /** Project impact and results */
    impact: z.object({
      /** Quantitative metrics (optional) */
      metrics: z.array(z.object({
        label: z.string(),
        value: z.string(),
      })).optional(),
      /** Qualitative impact description */
      qualitative: z.string(),
    }),
    
    /** Key learnings and takeaways */
    learnings: z.array(z.string()),
    
    /** Whether to feature on homepage */
    featured: z.boolean().default(false),
    
    /** Project status */
    status: z.enum(['completed', 'ongoing', 'archived']).default('completed'),
    
    /** Custom sort order (lower numbers first) */
    order: z.number().optional(),
    
    /** Related project slugs for cross-referencing */
    relatedProjects: z.array(z.string()).optional(),
    
    /** GitHub repository URL */
    githubUrl: z.string().url().optional(),
  }),
});

/**
 * Journey Timeline Collection
 * 
 * Career growth and learning progression timeline with milestones,
 * learning experiences, and career transitions.
 * 
 * Features:
 * - Three entry types (milestone, learning, transition)
 * - Skills/technologies per entry
 * - Optional expandable content
 */
const journeyCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/journey' }),
  schema: z.object({
    /** Date of the timeline entry */
    date: z.coerce.date(),
    
    /** Entry title */
    title: z.string(),
    
    /** Type of timeline entry */
    type: z.enum(['milestone', 'learning', 'transition']),
    
    /** Brief description */
    description: z.string(),
    
    /** Skills or technologies associated with this entry */
    skills: z.array(z.string()).optional(),
  }),
});


/**
 * Uses Collection
 * 
 * Documentation of tools and technologies used in development workflow.
 * 
 * Features:
 * - Two categories (tools, stack)
 * - Items with name, description, and optional URL
 * - Custom order for intentional presentation
 */
const usesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/uses' }),
  schema: z.object({
    /** Category for grouping */
    category: z.enum(['tools', 'stack']),
    
    /** List of items in this category */
    items: z.array(z.object({
      name: z.string(),
      description: z.string(),
      url: z.string().url().optional(),
    })),
    
    /** Sort order within category */
    order: z.number(),
  }),
});

/**
 * Testimonials Collection
 * 
 * Endorsements and recommendations from colleagues and clients.
 * 
 * Features:
 * - Person details (name, role, company)
 * - Relationship context
 * - Quote text
 * - Optional LinkedIn profile link
 * - Featured flag for homepage display
 */
const testimonialsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/testimonials' }),
  schema: z.object({
    /** Person's name */
    name: z.string(),
    
    /** Person's role/title */
    role: z.string(),
    
    /** Person's company */
    company: z.string(),
    
    /** Relationship context (e.g., "Worked together at Company X") */
    relationship: z.string(),
    
    /** Testimonial quote */
    quote: z.string(),
    
    /** LinkedIn profile URL (optional) */
    linkedin: z.string().url().optional(),
    
    /** Whether to feature on homepage */
    featured: z.boolean().default(false),
    
    /** Date of the testimonial */
    date: z.coerce.date(),
  }),
});

/**
 * Export all collections
 * 
 * This object is used by Astro to register all content collections
 * and generate TypeScript types for type-safe content queries.
 */
export const collections = {
  projects: projectsCollection,
  journey: journeyCollection,
  uses: usesCollection,
  testimonials: testimonialsCollection,
};
