"use server";

import z from "zod";

export default async function NewsletterValidation(prevState, formData) {
    const email = formData.get("email");

    const schema = z.object({
        email: z.string().min(1, { message: "Please enter your email!" }),
    });

    const validated = schema.safeParse({
        email
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    return validated
}