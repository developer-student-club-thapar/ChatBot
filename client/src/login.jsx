import React from "react"

import { Link } from "react-router-dom"

import BackButton from "./backbutton"
import './loginpg.css'


export default function Login(){
    return(
        <div>


<div className="signup-form">
            
            <h1>LOGIN</h1>

            <form action="">
                <label htmlFor="application number">Email</label>
                <input 
                type="text"
                placeholder='Enter email'
                id='application_number'
                />



                <label htmlFor="password">Password</label>
                <input type="password" 
                id="password"
                placeholder='Enter password'
                />
                <button type='submit'>
                    LOGIN
                </button>
            </form>
            

            <p id="loginAlready"> if account doesnt exist then <a href="/signup">signup</a></p>
            
            </div>

            <div>
                <BackButton/>
            </div>
        
</div>

    )
}