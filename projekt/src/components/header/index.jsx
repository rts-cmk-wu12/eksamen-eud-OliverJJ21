"use server";

import Image from "next/image";
import './header.scss'
import SwapHub from '../../../public/images/SwapHub.svg'
import Link from "next/link";
import AuthButtons from "../authbuttons";
import { cookies } from "next/headers";

export default async function Header() {
    const cookieStore = await cookies();
    const token = cookieStore.get("sh_token")?.value;
    const LoggedIn = typeof token === "string" && token.length > 0
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-container__logo">
                        <Image src={SwapHub} alt="Header Logo" priority></Image>
                    </div>
                    <div className="navbar-links">
                        <Link className="active" href="/">Listings</Link>
                        <Link href="/">Community</Link>
                        <Link href="/contact">Contact</Link>
                        <AuthButtons LoggedIn={LoggedIn}/>
                    </div>
                </div>
            </nav>
        </>
    )
}