// Taget fra tidligere projekt

"use server";

import z from "zod";

export default async function LoginValidation(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const schema = z.object({
        email: z.string().min(1, { message: "Please enter your email!" }),
        password: z.string().min(1, { message: "Please enter your password!" })
    });

    const validated = schema.safeParse({
        email, password
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    return validated;
}
