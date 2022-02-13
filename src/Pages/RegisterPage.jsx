import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { RegisterAPI } from '../Services/API'
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

    let navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(async (form) => {
            let response = await RegisterAPI(form)
            console.log(response)
        })}>
            <label htmlFor="firstname">username</label>
            <input 
                type="text" id='username'
                {...register("username", { 
                    required: true,  
                })} 
            /> <br />
            <label htmlFor="email">email</label>
            <input 
                type="email" id='email'
                {...register("email", { 
                    required: true,  
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                    }
                })} 
            /> <br />
            {errors.email && <span>This field is required</span>} <br />
            <label htmlFor="password">mot de passe</label>
            <input type="password" id='password' {...register("password", { required: true })} /> <br />
            {errors.password && <span>This field is required</span>} <br />
            <input type="submit" /> <br />

        </form>
    )

}