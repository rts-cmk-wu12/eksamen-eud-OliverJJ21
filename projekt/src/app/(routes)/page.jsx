import ListingsCard from "@/components/listing";
import Header from "@/components/header";
import Footer from "@/components/footer";
import './frontpage.scss';


export default async function Home() {
  const response = await fetch("http://localhost:4000/api/v1/listings");
  const json = await response.json();

  return (
    <>
      <Header />
      <div className="listings-container">
        <section className="listings-container__wrapper">
          <ul>
            {json.map(listings => (
              <li key={listings.id}>
                <ListingsCard listings={listings} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}
