import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Button from '../component/atom/Button';
import firebaseSetting from '../config/firebase/firebaseConfig';
import { registerUserAPI } from '../config/redux/action/actionApp';

console.log('config firebase => ',firebaseSetting);

class Register extends Component {
    state = {
        email: '',
        password: '',
    }

    // fungsi ini digunakan ketika "text area input di ketik", 
    urusanIsiInputText = (e) => { 
        this.setState({
            [e.target.id]: e.target.value, 
        })
    } 

    // fungsi ini digunakan untuk mengeksekusi button ketika di klik
    urusanButtonKlik = async () => {
        const {email, password} = this.state
        console.log('data seblum kirim : ', email, password)
        const res = await this.props.registerAPI({email, password}).catch(err => err);
        if(res) {
            this.setState({
                email: '',
                password: ''
            })
        }  
    }
    
    render(){
        return(
            <Fragment>
                <div className="dada">
                    <h2>Register Page</h2>
                </div>

                <div className="body-register">
                    <input id="email" className="form1" type="text" placeholder="email" onChange={this.urusanIsiInputText} value={this.state.email} />
                    <input id="password" className="form1" type="password" placeholder="password" onChange={this.urusanIsiInputText} value={this.state.password} />
                    <Button diKlik={this.urusanButtonKlik} title="Register" loading={this.props.isLoading} />        
                </div>
            </Fragment>
        )
    }
}

// fungsi ini untuk mendifinisikan bahwa nilai reduxState adalah sama dengan value dari isLoading
const reduxState = (state) => ({
    isLoading: state.isLoading
})

// fungsi ini untuk memanggil dari action dari file actionApp.js, kemudian men dispatch registerUserAPI
// agar bisa di gunakan di page register
const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

// mengirimkan connect sebagai status jika page ini menggunakan redux secara global
export default connect(reduxState, reduxDispatch)(Register);
