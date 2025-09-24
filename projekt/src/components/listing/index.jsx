import Image from "next/image";
import Link from "next/link";
import '../../app/(routes)/frontpage.scss'

export default function ListingsCard({listings}) {

    return (
        <>
          <Link href={`/${listings.id}`}>
                <article className="listingscard">
                    <Image src={listings.asset.url} width={350} height={420} alt={listings.title}></Image>.
                    <div className="listingscard__info">
                        <p>{listings.title}</p>
                    </div>
                </article>
            </Link>
        </>
    )
}