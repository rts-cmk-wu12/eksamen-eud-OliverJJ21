// Taget fra tidligere projekt

"use server";

import { redirect } from "next/navigation";
import z from "zod";

export default async function createUser(prevState, formData) {
    const email = formData.get("email");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const password = formData.get("password");

    const schema = z.object({
        email: z.string().min(1, { message: "Please enter your email!" }),
        firstname: z.string().min(1, { message: "Please enter your firstname!" }),
        lastname: z.string().min(1, { message: "Please enter your lastname!" }),
        password: z.string().min(1, { message: "Please enter your password!" }),
    });

    const validated = schema.safeParse({
        email, firstname, lastname, password
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    const response = await fetch(`${process.env.API_BASE_URL}/users`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email: validated.data.email,
            password: validated.data.password,
            firstname: validated.data.firstname,
            lastname: validated.data.lastname

        })
    });

    if (response.status !== 201) return {
        success: false,
        errors: ["Noget gik galt på serveren, prøv igen senere"]
    }

    redirect("/sign-in")

    return await response.json();
}