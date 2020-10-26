import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Button from '../component/atom/Button'; 
import { loginUserAPI } from '../config/redux/action/actionApp';


class Login extends Component {

    // mendifinisikan bahwa : gantiUSER adalah props dari : gantiUsername
    // gantiUSER = () => {
    //     this.props.gantiUsername()
    // }

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
    urusanButtonKlikLogin = async () => {
        const {email, password} = this.state
        console.log('data seblum kirim : ', email, password)
        const {history} =  this.props;
        const res = await this.props.loginAPI({email, password}).catch(err => err);
        if(res){
            console.log("login berhasil", res)
            this.setState({
                email: '',
                password: ''
            })
            history.push('/dashboard')
        }else{
            console.log("login gagal")
        }
        
    }

    render(){
        return(
            <Fragment>
                <div className="dada">
                    <h2>Login Page</h2>
                </div>

                <div className="body-login">
                    <input id="email" className="form1" type="text" placeholder="email" onChange={this.urusanIsiInputText} value={this.state.email} />
                    <input id="password" className="form1" type="password" placeholder="password" onChange={this.urusanIsiInputText} value={this.state.password} />
                    <Button diKlik={this.urusanButtonKlikLogin} title="Login" loading={this.props.isLoading} />        
                </div>
            </Fragment>
         )
    }
} 


// fungsi ini untuk mendifinisikan bahwa nilai reduxState adalah sama dengan value dari isLoading
const reduxState = (state) => ({
    isLoading: state.isLoading
})

// fungsi ini untuk memanggil dari action dari file actionApp.js, kemudian men dispatch loginUserAPI
// agar bisa di gunakan di page register
const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

 export default connect(reduxState, reduxDispatch)(Login);
