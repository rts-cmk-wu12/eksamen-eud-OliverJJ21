"use client"

import ContactAction from "@/actions/contactaction";
import { useActionState } from "react";
import './contact.scss'

export default function ContactForm() {
    const [formState, formAction] = useActionState(ContactAction);
    return (
        <>
        <h1>Contact Us</h1>
            <div className="contact-container">
                <form action={formAction} className="contact-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" />
                        <p className='error'>{formState?.properties?.email?.errors}</p>
                    </div>
                    <div className="form-group">
                        <label>Firstname</label>
                        <input type="text" name="firstname" placeholder="Firstname" />
                        <p className='error'>{formState?.properties?.firstname?.errors}</p>
                    </div>
                    <div className="form-group">
                        <label>Lastname</label>
                        <input type="text" name="lastname" placeholder="Lastname" />
                        <p className='error'>{formState?.properties?.lastname?.errors}</p>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" cols="30" rows="10"></textarea>
                        <p className='error'>{formState?.properties?.message?.errors}</p>
                        <button className='contact-form__btn'>Contact Us</button>
                    </div>
                </form>
            </div>
        </>
    )
}