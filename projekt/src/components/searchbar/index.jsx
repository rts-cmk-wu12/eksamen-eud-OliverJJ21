"use client";

import SearchAction from "@/actions/searchaction";
import { useActionState } from "react";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import ListingsCard from "../listing";
import '../../app/(routes)/frontpage.scss';

export default function SearchForm() {
    const [formState, formAction] = useActionState(SearchAction);
    const [startListings, setstartListings] = useState([]);

    useEffect(() => {
        async function fetchAll() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/listings`);
            if (response.ok) {
                const data = await response.json();
                setstartListings(data);
            }
        }
        fetchAll();
    }, []);

    const listingsToStart = Array.isArray(formState) ? formState : startListings;

    return (
        <>
            <form action={formAction} className="search-field">
                <div>
                    <label>
                        <input type="text" name="keyword" placeholder="Search" />
                        <button type="submit"><IoSearch /></button>
                    </label>
                </div>
            </form>

            {(Array.isArray(formState) && !formState?.length) && (
                <div className="no-results">Der er ingen resultater</div>
            )}

            <section className="listings-container__wrapper">
                <ul>
                    {listingsToStart.map(listings => (
                        <li key={listings.id}>
                            <ListingsCard listings={listings} />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
