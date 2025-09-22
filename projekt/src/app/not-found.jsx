import './not-found.scss'
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div className='notfound-container'>
                <h1>404</h1>
                <p>Oops siden du leder efter findes ikke!</p>
                <Link href="/">Gå tilbage til forsiden</Link>
            </div>

        </>
    )
}