import React, { Fragment } from 'react';
// import firebaseSetting from '../config/firebase'

 const Login = () =>{
     return(
        <Fragment>
        <div className="dada">
            <h2>Login Page</h2>
        </div>

        <div className="body-login">
            <input className="form1" type="email" placeholder="email" />
            <input className="form1" type="password" placeholder="password" />         
            <button className="button-submit">Submit</button>
        </div>
    </Fragment>
     )
 }

 export default Login;
