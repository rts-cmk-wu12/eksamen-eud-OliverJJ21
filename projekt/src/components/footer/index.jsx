import Image from "next/image";
import './footer.scss'
import SwapHub from '../../../public/images/SwapHub.svg'
import Link from "next/link";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Newsletter from "../newsletter";



export default function Footer() {
    return (
        <>
            <footer className="footer-container">
                <div className="footer-links">
                    <Image src={SwapHub} alt="Footer Logo"></Image>
                    <div className="icons">
                        <Link href="https://x.com" target="_blank"><FaXTwitter /></Link>
                        <Link href="https://instagram.com" target="_blank"><FaInstagram /></Link>
                        <Link href="https://youtube.com" target="_blank"><FaYoutube /></Link>
                        <Link href="https://linkedin.com" target="_blank"><FaLinkedin /></Link>
                    </div>
                </div>
                <div className="footer-about">
                    <p className="title">About SwapHub</p>
                    <li>How it works</li>
                    <li>Community guidelines</li>
                    <li>Our mission</li>
                    <li>Contact us</li>
                </div>
                <div className="footer-discover">
                    <p className="title">Discover</p>
                    <li>Browse categories</li>
                    <li>Popular Swaps</li>
                    <li>Successful stories</li>
                    <li>Upcoming events</li>
                </div>
                <div className="footer-support">
                    <p className="title">Support</p>
                    <li>Help Center</li>
                    <li>FAQs</li>
                    <li>Safety tips</li>
                    <li>Report an issue</li>
                </div>
                <Newsletter/>
            </footer>
        </>
    )
}