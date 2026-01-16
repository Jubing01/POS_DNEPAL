import * as z from "zod";

export const productFormSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  sku: z.string(),
  costPrice: z.coerce.number(),
  sellingPrice: z.coerce.number().optional(),
  unit: z.coerce.number(),
  minStock: z.coerce.number().int(),
  openingStock: z.coerce.number().int(),
  expiryDate: z.coerce.date().optional(),
  status: z.boolean().default(true),
  categoryId: z.string().optional(),
  brandId: z.string().optional(),
});

export type ProductFormType = z.infer<typeof productFormSchema>;

export type ProductInputType = z.input<typeof productFormSchema>;
