import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import firebaseSetting from '../config/firebase/firebase'

class Login extends Component {
    render(){
        return(
            <Fragment>
                <div className="dada">
                    <h2>Login Page {this.props.popupProps} </h2>
                </div>
    
                <div className="body-login">
                    <input className="form1" type="email" placeholder="email" />
                    <input className="form1" type="password" placeholder="password" />         
                    <button className="button-submit">Submit</button>
                </div>
            </Fragment>
         )
    }
} 

 const reduxState = (state) => ({
     popupProps: state.popup
 })

 export default connect(reduxState, null)(Login);
