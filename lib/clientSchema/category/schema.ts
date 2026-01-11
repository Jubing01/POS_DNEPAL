import * as z from 'zod'

export const categorySchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
})

export type CategoryType = z.infer<typeof categorySchema>;