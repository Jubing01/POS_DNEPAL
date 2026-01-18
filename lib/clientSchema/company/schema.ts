import * as z from "zod";

export const CreateCompanySchema = z.object({
  company: z.object({
    name: z.string().min(2, "Company name is required"),
    address: z.string(),
    phone: z.string(),
    pan: z.string(),
    logoUrl: z.string().optional(),
    currency: z.string().default("NPR"),
    rounding: z.int().default(2),
  }),
  adminUser: z.object({
    name: z.string(),
    email: z.email("Invalid email"),
    password: z.string().min(8, "Minimum 8 characters"),
  }),
  subscription: z.object({
    packageId: z.string(),
    packageName: z.string().optional(),
    packageInterval: z.string().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
  }),
});

export type CreateCompanyFormType = z.infer<typeof CreateCompanySchema>;

export type CreateCompanyInputType = z.input<typeof CreateCompanySchema>;

export type GetCompanyRowType = {
  name: string;
};
