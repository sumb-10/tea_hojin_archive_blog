import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  category: z.string(),
  date: z.coerce.date(),
  note: z.string(),
  image: z.string(),
});

const score = z.number().min(0).max(10).multipleOf(0.5);

const teaLogSchema = postSchema.extend({
  tastingNote: z.string().optional(),
  tasting: z
    .object({
      space: score,
      density: score,
      softness: score,
      clarity: score,
    })
    .optional(),
});

export const collections = {
  "tea-log": defineCollection({ type: "content", schema: teaLogSchema }),
  teaware: defineCollection({ type: "content", schema: postSchema }),
  notes: defineCollection({ type: "content", schema: postSchema }),
};
