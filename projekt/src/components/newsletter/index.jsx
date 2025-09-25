"use client";

import NewsletterAction from "@/actions/newsletteraction";
import { useActionState } from "react";
import './newsletter.scss'

export default function Newsletter() {
    const [formState, formAction] = useActionState(NewsletterAction)
    return (
        <form action={formAction}>
            <div className="subscribe">
                <input type="text" name="email" placeholder="Enter your email..." />
                <p className='error'>{formState?.properties?.email?.errors}</p>
                <button>Subscribe to newsletter</button>
            </div>
        </form>
    )

}
