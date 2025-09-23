"use client"

import Link from "next/link"
import { useState } from "react"
import "../header/header.scss"
import logoutAction from "@/actions/logout"
import { redirect } from "next/navigation"



export default function AuthButtons({ LoggedIn }) {
    const [isLoggedIn, setIsLoggedIn] = useState(LoggedIn)

    const handleLogout = async () => {
        await logoutAction()
        setIsLoggedIn(false)
        redirect("/profile");
    }

    return (
        <div className="navbar-links__buttons">
            {isLoggedIn ? (
                <>
                    <button className="sign-out" onClick={handleLogout}>Log out</button>
                    <Link className="register" href="/profile">Profile</Link>
                </>
            ) : (
                <>
                    <Link className="sign-in" href="/sign-in">Sign in</Link>
                    <Link className="register" href="/register">Register</Link>
                </>
            )}
        </div>
    )
}