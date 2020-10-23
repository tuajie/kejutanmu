import React from 'react';
import firebaseSetting from '../config/firebase'

console.log('config firebase =>',firebaseSetting);

const Register = () =>{
    return(
        <div className="body-register">
            <input className="form1" type="email" placeholder="email" />
            <input className="form1" type="password" placeholder="password" />         
            <button className="button-submit">Submit</button>
        </div>
    )
}

export default Register;
