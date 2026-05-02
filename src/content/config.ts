import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  category: z.string(),
  date: z.coerce.date(),
  note: z.string(),
  image: z.string(),
});

export const collections = {
  "tea-log": defineCollection({ type: "content", schema: postSchema }),
  teaware: defineCollection({ type: "content", schema: postSchema }),
  notes: defineCollection({ type: "content", schema: postSchema }),
};
