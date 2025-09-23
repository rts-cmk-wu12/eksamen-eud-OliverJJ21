// Taget fra tidligere projekt

"use server";

import { cookies } from "next/headers";
import z from "zod";

export default async function LoginAction(prevState, formData) {
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
        ...(z.treeifyError(validated.error)),
        data: {
			email,
			password
		}
    }


    // Kode taget fra noget vi har lavet sammen
	const response = await fetch(`${process.env.API_AUTH_URL}`, {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify({
			email: validated.data.email,
			password: validated.data.password
		})
	});

	if (!response.ok) return {
		success: false,
		errors: ["Forkert Email eller Adganskode"],
		data: {
			email,
			password
		}
	};

	const json = await response.json();

	const cookieStore = await cookies();

	cookieStore.set({
		name: "sh_token",
		value: json.token,
		path: "/",
		maxAge: 60 * 30,
		secure: true
	});

	cookieStore.set({
		name: "sh_userid",
		value: json.userId,
	});

	return {
		success: true,
		data: {
			email,
			password
		}
	}; 
}
