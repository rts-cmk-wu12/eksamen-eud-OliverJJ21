import Link from "next/link";
import '../header/header.scss'
export default function AuthButtons() {
    return (
        <>
            <div className="navbar-links__buttons">
                <Link className="sign-in" href="/sign-in">Sign in</Link>
                <Link className="register" href="/">Register</Link>
            </div>
        </>
    )
}