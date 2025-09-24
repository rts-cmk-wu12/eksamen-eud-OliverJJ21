import Header from "@/components/header";
import Footer from "@/components/footer";
import './frontpage.scss';
import SearchForm from "@/components/searchbar";


export default async function Home() {
  const response = await fetch(`${process.env.API_BASE_URL}/listings`);
  const json = await response.json();

  return (
    <>
      <Header />
      <div className="listings-container">
        <SearchForm key={json}/>
      </div>
      <Footer />
    </>
  );
}
