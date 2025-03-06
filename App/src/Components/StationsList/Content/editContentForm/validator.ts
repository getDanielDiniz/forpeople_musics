import { z } from "zod"

const schema = z.object({
    name: z.string().trim().min(1, "Campo nome tem de ser preenchido"),
    country: z.string().nullable(),
    state: z.string().nullable(),
    tags: z.string().nullable(),
})

export default schema