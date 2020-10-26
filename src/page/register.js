import React, { Component, Fragment } from 'react';
import Button from '../component/atom/Button';
import firebaseSetting from '../config/firebase/firebaseConfig'

console.log('config firebase => ',firebaseSetting);

class Register extends Component {
    state = {
        email: '',
        password: '',
        isLoading: false
    }

    // fungsi ini digunakan ketika "text area input di ketik", 
    urusanIsiInputText = (e) => {
        // console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value, 
        })
    } 

    // fungsi ini digunakan untuk mengeksekusi button ketika di klik
    urusanButtonKlik = () => {
        const {email, password} = this.state
        console.log('data seblum kirim : ', email, password)
        this.setState({
            isLoading: true
        })
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)
        // firebaseSetting.auth().createUserWithEmailAndPassword(email, password)
        //     // Handle Suksess here.
        //     .then(res => {
        //         console.log('success: ', res);
        //     })
        //     // Handle Errors here.
        //     .catch(function(error) { 
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         console.log(errorCode, errorMessage)
        //   });
    }
    
    render(){
        return(
            <Fragment>
                <div className="dada">
                    <h2>Register Page</h2>
                </div>

                <div className="body-register">
                    <input id="email" className="form1" type="text" placeholder="email" onChange={this.urusanIsiInputText} />
                    <input id="password" className="form1" type="password" placeholder="password" onChange={this.urusanIsiInputText} />
                    <Button diKlik={this.urusanButtonKlik} title="Register" loading={this.state.isLoading} />        
                </div>
            </Fragment>
        )
    }
}
 
export default Register;
