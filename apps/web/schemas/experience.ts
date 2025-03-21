import { z } from "zod"

export const createExperienceSchema = z.object({
  location: z.string().min(1, "施設名を入力してください"),
  date: z.date({
    required_error: "日付を選択してください",
  }),
  temperature: z.number().min(60).max(120),
  waterTemperature: z.number().min(0).max(30),
  duration: z.number().min(1).max(60),
  satisfaction: z.number().min(1).max(5),
  notes: z.string().optional(),
})

export type CreateExperienceInput = z.infer<typeof createExperienceSchema>
