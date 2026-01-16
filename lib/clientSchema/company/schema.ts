import * as z from "zod";

export const companyFormSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  address: z.string(),
  phone: z.string(),
  logoUrl: z.string().optional(),
  isActive: z.boolean().default(true),
  currency: z.string().default("NPR"),
  rounding: z.number().int().default(2),
});

export type CompanyTypeForm = z.infer<typeof companyFormSchema>;
