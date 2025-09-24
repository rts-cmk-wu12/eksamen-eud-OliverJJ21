"use server";

import z from "zod";

export default async function ContactAction(prevState, formData) {
    const email = formData.get("email");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const message = formData.get("message")

    const schema = z.object({
        email: z.string().min(1, { message: "Please enter your email!" }),
        firstname: z.string().min(1, { message: "Please enter your firstname!" }),
        lastname: z.string().min(1, { message: "Please enter your lastname!" }),
        message: z.string().min(1, { message: "Please enter your message!" })
    });

    const validated = schema.safeParse({
        email, firstname, lastname, message
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error)),
        data: {
            email,
            firstname,
            lastname,
            message
        }
    }
}