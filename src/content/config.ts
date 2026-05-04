import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  category: z.string(),
  date: z.coerce.date(),
  note: z.string(),
  image: z.string(),
  map: z
    .object({
      title: z.string(),
      lat: z.number(),
      lng: z.number(),
      zoom: z.number().min(0).max(21).optional(),
      mapType: z.enum(["roadmap", "satellite"]).optional(),
    })
    .optional(),
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
  "scent-notes": defineCollection({ type: "content", schema: postSchema }),
  teaware: defineCollection({ type: "content", schema: postSchema }),
  notes: defineCollection({ type: "content", schema: postSchema }),
};
