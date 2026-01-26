import * as z from "zod";

export const packageSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	price: z.number(),
	interval: z.enum(["MONTHLY", "YEARLY"]),

	maxProducts: z.number(),
	maxStaff: z.number(),

	enableReports: z.boolean(),
	enableAdvanced: z.boolean(),

	createdAt: z.date().optional(),
});

export type PackageType = z.infer<typeof packageSchema>;
