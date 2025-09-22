"use client";

import LoginValidation from "@/actions/loginvalidation";
import { useActionState } from "react";
import './signin.scss'


export default function SignInForm() {
    const [formState, formAction] = useActionState(LoginValidation);
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
                </form>
            </div>
        </>
    )
}