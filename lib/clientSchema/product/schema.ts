import * as z from "zod";

export const productFormSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  sku: z.string(),
  costPrice: z.number(),
  sellingPrice: z.number(),
  unit: z.enum(["KG", "LITER", "METER", "PIECE"]),
  currentStock: z.number(),
  minStock: z.number(),

  categoryId: z.string(),
  brandId: z.string(),
  
  createdByName: z.string().optional(),
  expiryDate: z.coerce.date().optional(),
  categoryName: z.string().optional(),
  brandName: z.string().optional(),
  createdBy: z.string().optional(),
});

export type ProductFormType = z.infer<typeof productFormSchema>;
