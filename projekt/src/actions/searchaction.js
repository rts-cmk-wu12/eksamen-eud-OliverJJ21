// Kode taget fra noget vi har lavet sammen

"use server";

export default async function SearchAction(prevState, formData) {

    const { keyword } = Object.fromEntries(formData);


    const response = await fetch(`${process.env.API_BASE_URL}/listings`);
    if (!response.ok) {
        return {
            status: "Søgning Fejledede"
        };
    }

    const json = await response.json();

    const filteredData = json.filter(listings => (listings.title.toLowerCase().includes(keyword.toLowerCase())
        || listings.description.toLowerCase().includes(keyword.toLowerCase())
        || listings.user.firstname.toLowerCase().includes(keyword.toLowerCase())
    ));

    return filteredData;
}