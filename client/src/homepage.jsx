import React from 'react';
import { Link } from 'react-router-dom';


import './homepg.css'



export default function Signup() {
    return (
        <div className="signup-form">
            <h1>HomePage</h1>
            {/* Link to navigate to the login page */}
            
            <Link to="/login"><button>Go to Login</button></Link>
            
            <br></br><br></br>
            <Link to="/signup"><button>Go to Signup</button></Link>

            


        </div>
    );
}
