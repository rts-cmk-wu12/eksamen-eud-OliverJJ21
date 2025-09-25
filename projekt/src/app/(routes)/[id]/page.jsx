// Taget fra et tidligere projekt

import Header from "@/components/header";
import Image from "next/image";
import './details.scss'
import Footer from "@/components/footer";

export async function generateMetadata({ params }) {
    const { id } = await params;

    const response = await fetch(`${process.env.API_BASE_URL}/listings/${id}`);
    const json = await response.json();
    return {
        title: json.title
    }
}

export default async function DetailPage({ params }) {
    const { id } = await params;

    const response = await fetch(`${process.env.API_BASE_URL}/listings/${id}`);
    const json = await response.json();

    return (
        <>
            <Header />
            <div className="detail-container">
                <Image src={json.asset.url} width={415} height={415} alt={json.title}></Image>
                <article className="detail-container__details">
                    <p className="title">{json.title}</p>
                    <p className="desc">{json.description}</p>
                    <p className="date">On SwapHub since: {json.createdAt.slice(0, 10)}</p>
                    <div>
                        <button>Propose a swap</button>
                    </div>
                </article>
            </div>
            <div className="other-container">
                <p className="other-container__title">Other items from this Swapper</p>
            </div>
            <Footer />
        </>
    )
}