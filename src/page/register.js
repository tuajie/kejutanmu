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
        // console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value, 
        })
    } 

    // fungsi ini digunakan untuk mengeksekusi button ketika di klik
    urusanButtonKlik = () => {
        const {email, password} = this.state
        console.log('data seblum kirim : ', email, password)
        this.props.registerAPI({email, password})
        // this.setState({
        //     isLoading: true
        // })
        // setTimeout(() => {
        //     this.setState({
        //         isLoading: false
        //     })
        // }, 3000) 
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
                    <Button diKlik={this.urusanButtonKlik} title="Register" loading={this.props.isLoading} />        
                </div>
            </Fragment>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})
 
export default connect(reduxState, reduxDispatch)(Register);
