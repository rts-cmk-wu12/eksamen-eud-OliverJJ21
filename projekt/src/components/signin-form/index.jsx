"use client";

import LoginAction from "@/actions/loginaction";
import { useActionState, useEffect } from "react";
import './signin.scss'
import { ToastContainer, toast } from "react-toastify";
import { redirect } from "next/navigation";


export default function SignInForm() {
    const [formState, formAction, pending] = useActionState(LoginAction);

    useEffect(function () {
        pending ? toast.loading("Logging in", { toastId: "loader" }) : toast.dismiss();

        if (formState?.success) {
            toast.update("loader", {
                toastId: "loader",
                render: "You are now logged in",
                type: "success",
                isLoading: false,
                closeOnClick: false,
                hideProgressBar: true,
                position: "top-right"
            });
            setTimeout(function () {
                redirect("/profile");
            }, 1000);
        }
    }, [formState, pending]);
    return (
        <>
            <div className='login-container'>
                <form action={formAction} className="login-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" />
                        <p className='error'>{formState?.properties?.email?.errors}</p>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" />
                        <p className='error'>{formState?.properties?.password?.errors}</p>
                        <button className='login-form__btn'>Sign in</button>
                        <p className="forgot">Forgot password?</p>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </>
    )
}