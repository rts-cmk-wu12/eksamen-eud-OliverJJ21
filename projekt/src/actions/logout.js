"use server"

import { cookies } from "next/headers"

export default async function logoutAction() {

    const cookieStore = cookies()
    cookieStore.delete("sh_token")
    return;
}