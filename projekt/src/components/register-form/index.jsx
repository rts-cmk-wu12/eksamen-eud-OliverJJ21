"use client";

import { useActionState, useEffect } from "react";
import './register.scss'
import createUserForm from "@/actions/createuser";
import { ToastContainer, toast } from "react-toastify";


export default function registerForm() {
    const [formState, formAction, pending] = useActionState(createUserForm);

    useEffect(function () {
        pending ? toast.loading("Creating user", { toastId: "loader" }) : toast.dismiss();

        if (formState?.success) {
            toast.update("loader", {
                toastId: "loader",
                type: "success",
                isLoading: false,
                closeOnClick: false,
                hideProgressBar: true,
                position: "top-right"
            });
        }
    }, [formState, pending]);

    return (

        <>
            <h1>Register</h1>
            <div className="register-container">
                <form action={formAction} className="register-form">
                    <div className="form-group">
                        <label>Firstname</label>
                        <input type="text" name="firstname" placeholder="Firstname" defaultValue={formState?.data?.firstname} />
                        <p className='error'>{formState?.properties?.firstname?.errors}</p>
                    </div>
                    <div className="form-group">
                        <label>Lastname</label>
                        <input type="text" name="lastname" placeholder="Lastname" defaultValue={formState?.data?.lastname} />
                        <p className='error'>{formState?.properties?.lastname?.errors}</p>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Email" defaultValue={formState?.data?.email} />
                            <p className='error'>{formState?.properties?.email?.errors}</p>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password" defaultValue={formState?.data?.password} />
                            <p className='error'>{formState?.properties?.password?.errors}</p>
                        </div>
                        <button className='register-form__btn'>Register</button>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </>
    )
}