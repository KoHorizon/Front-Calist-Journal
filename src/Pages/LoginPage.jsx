
import React from 'react';
import { useForm } from "react-hook-form";
import { LoginAPI } from './../Services/API'
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    

    return (
        <form onSubmit={handleSubmit(async (form) => {
            try {
                let response = await LoginAPI(form)
                if (response.token !==  undefined) {
                    localStorage.setItem('token', response.token)
                } 
                console.log(response.token);
                navigate('/login') 
            } catch(err) {
                console.log(err);
                navigate('/login')
            }
        })}>
            <label htmlFor="email">email</label>
            <input 
                type="email" id='email'
                defaultValue="test@hot.fr" 
                {...register("email", { 
                    required: true,  
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                    }
                })} 

            /> <br />
            {errors.email && <span>This field is required</span>} <br />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id='password' {...register("password", { required: true })} /> <br />
            {errors.password && <span>This field is required</span>} <br />

            <input type="submit" /> <br />

        </form>
    )

}