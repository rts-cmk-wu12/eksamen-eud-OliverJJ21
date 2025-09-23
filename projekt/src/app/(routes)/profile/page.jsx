"use server";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ProfileCard from "@/components/profile-card";
import '../../../components/profile-card/profilecard.scss'
import { cookies } from "next/headers";

export default async function ProfilePage() {

    const cookieStore = await cookies()
    const userId = cookieStore.get("sh_userid")
    const token = cookieStore.get("sh_token")
    const response = await fetch(`${process.env.API_BASE_URL}/users/${userId.value}`, {
        headers: {
            Authorization: "Bearer " + token.value
        }
    });
    const users = await response.json();
    return (
        <>
            <Header />
            <div className="profile-container">
                <h1>Profile</h1>
                <ProfileCard users={users} />
            </div>
            <Footer />
        </>
    )
}