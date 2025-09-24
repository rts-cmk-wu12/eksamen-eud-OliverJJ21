"use client";

import SearchAction from "@/actions/searchaction";
import { useActionState } from "react";
import { IoSearch } from "react-icons/io5";
import ListingsCard from "../listing";
import '../../app/(routes)/frontpage.scss'

export default function SearchForm() {
    const [formState, formAction] = useActionState(SearchAction);

    return (
        <>
            <form action={formAction} className="search-field" >
                <div >
                    <label>
                        <input type="text" name="keyword" placeholder="Search" />
                        <button type="submit"><IoSearch /></button>
                    </label>
                </div>

            </form>
            {(Array.isArray(formState) && !formState?.length) && <div className="no-results">Der er ingen resultater</div>}
            <section className="listings-container__wrapper">
                <ul>
                    {formState?.map(listings => (
                        <li key={listings.id}>
                            <ListingsCard listings={listings} />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}