import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionGantiUser } from '../config/redux/action/actionApp';
// import firebaseSetting from '../config/firebase/firebase'

class Login extends Component {

    // mendifinisikan bahwa : gantiUSER adalah props dari : gantiUsername
    gantiUSER = () => {
        this.props.gantiUsername()
    }

    render(){
        return(
            <Fragment>
                <div className="dada">
                    {/* defaultnya adalah memanggil dari reducer */}
                    <h2>Login Page {this.props.userName} </h2>
                    {/* lalu di eksekusi ketika ada perintah onClick => ekesekusi : gantiUSER */}
                    <button onClick={this.gantiUSER}>KLIK DISINI</button>
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


// memanggil dari file reducer, dimana di definisikan mana saja yg menjadi state bawaannya
 const reduxState = (state) => ({
     popupProps: state.popup,
     userName: state.user
 })

 // membuat fungsi untuk memanggil: gantiUsername agar dapat di dispatch oleh : actionGantiUser
 const reduxDispatch = (dispatch) => ({
     gantiUsername: () => dispatch(actionGantiUser())
 })

 export default connect(reduxState, reduxDispatch)(Login);
