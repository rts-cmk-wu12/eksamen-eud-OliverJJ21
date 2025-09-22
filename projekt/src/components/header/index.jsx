import Image from "next/image";
import './header.scss'
import SwapHub from '../../../public/images/SwapHub.svg'
import Link from "next/link";
import AuthButtons from "../authbuttons";

export default function Header() {
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
                        <AuthButtons/>
                    </div>
                </div>
            </nav>
        </>
    )
}