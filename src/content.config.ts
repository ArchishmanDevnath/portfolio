import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const status = z.enum(["published", "placeholder"]).default("placeholder");

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    problem: z.string(),
    solution: z.string(),
    tradeoffs: z.string().optional(),
    outcome: z.string().optional(),
    tags: z.array(z.string()).optional(),
    status,
    publishDate: z.coerce.date().optional(),
    coverImage: z.string().optional(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ base: "./src/content/case-studies", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    context: z.string(),
    problem: z.string(),
    users: z.string(),
    diagnosis: z.string(),
    recommendation: z.string(),
    reflection: z.string().optional(),
    tags: z.array(z.string()).optional(),
    status,
    publishDate: z.coerce.date().optional(),
  }),
});

const insights = defineCollection({
  loader: glob({ base: "./src/content/insights", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    status,
    publishDate: z.coerce.date(),
  }),
});

export const collections = { projects, caseStudies, insights };
