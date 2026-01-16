import * as z from "zod";

export const subCategorySchema = z.object({
  id: z.string().optional(),
  slug: z.string().lowercase(),
  name: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type SubCategoryType = z.infer<typeof subCategorySchema>;
