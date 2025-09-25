"use server";

import z from "zod";

export default async function NewsletterAction(prevState, formData) {
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

    const response = await fetch(`${process.env.API_BASE_URL}/newsletter`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email: validated.data.email,

        })
    });

    if (response.status !== 204) return {
        success: false,
        errors: ["Noget gik galt på serveren, prøv igen senere"]
    }

    return;
}