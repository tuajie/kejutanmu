import React, { Fragment } from 'react';
import firebaseSetting from '../config/firebase'

console.log('config firebase =>',firebaseSetting);

const Register = () =>{
    return(
        <Fragment>
            <div className="dada">
                <h2>Register Page</h2>
            </div>

            <div className="body-register">
                <input className="form1" type="text" placeholder="email" />
                <input className="form1" type="password" placeholder="password" />         
                <button className="button-submit">Register</button>
            </div>
        </Fragment>
    )
}

export default Register;
