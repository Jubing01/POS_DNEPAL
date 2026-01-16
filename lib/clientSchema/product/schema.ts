import * as z from "zod";

export const productFormSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  sku: z.string(),
  price: z.number(),
  costPrice: z.number(),
  sellingPrice: z.number().optional(),
  unit: z.string(),
  minStock: z.number().int(),
  openingStock: z.number().int(),
  expiryDate: z.date().optional(),
  status: z.boolean().default(true),
  categoryId: z.string().optional(),
  brandId: z.string().optional(),
});

export type ProductFormType = z.infer<typeof productFormSchema>;
