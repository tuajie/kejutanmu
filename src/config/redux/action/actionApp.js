// kumpulan action untuk sebelum di ekesekusi ke reducer redux
import firebaseSetting from '../../firebase/firebaseConfig';



// set timeout memakai redux-thunx jadi nunggu delay 2 detik, baru di return/dispatch
export const actionGantiUser = () => {
    return (dispatch) => {
        setTimeout(() => {
            return dispatch({type: 'CHANGE_USER', value: 'Sudah di ganti username'})
        }, 2000)
    }
}


// fungsi action untuk konek aplikasi ke firebaseSetting, kemudian di kirim ke reducer
export const registerUserAPI = (data) => (dispatch) => {
    return new Promise((masuk, gagal) => {
        // ini untuk men dispatch CHANGE_LOADING menjadi true 
        dispatch({type: 'CHANGE_LOADING', value: true})
        // kemudian mengembalikan fungsi firebaseSetting untuk registrasi, dimana mengirimkan data : email dan password
        firebaseSetting.auth().createUserWithEmailAndPassword(data.email, data.password)
            // Handle Suksess here.
            .then(res => {
                console.log('success: ', res);
                //jika sudah ada respon dari server, maka mengembalikan fungsi button nya menjadi semula lagi
                dispatch({type: 'CHANGE_LOADING', value: false})
                masuk(true)
            })
            // Handle Errors here.
            .catch(function(error) { 
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                //jika sudah ada respon dari server, maka mengembalikan fungsi button nya menjadi semula lagi
                dispatch({type: 'CHANGE_LOADING', value: false})
                gagal(false)
        })
    })
    
}

// fungsi action untuk konek aplikasi ke firebaseSetting, kemudian di kirim ke reducer
export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((masuk, gagal) => {
            // ini untuk men dispatch CHANGE_LOADING menjadi true 
            dispatch({type: 'CHANGE_LOADING', value: true})
            // kemudian mengembalikan fungsi firebaseSetting untuk registrasi, dimana mengirimkan data : email dan password
            firebaseSetting.auth().signInWithEmailAndPassword(data.email, data.password)
                // Handle Suksess here.
                .then(res => {
                    console.log('success: ', res);
                    const dataUser = {
                        email: res.user.email,
                        uid: res.user.uid,
                        emailVerified: res.user.emailVerified
                    }
                    //jika sudah ada respon dari server, maka mengembalikan fungsi button nya menjadi semula lagi
                    dispatch({type: 'CHANGE_LOADING', value: false})
                    dispatch({type: 'CHANGE_LOGIN', value: true})
                    dispatch({type: 'CHANGE_USER', value: dataUser})
                    masuk(true)
                })
                // Handle Errors here.
                .catch(function(error) { 
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    //jika sudah ada respon dari server, maka mengembalikan fungsi button nya menjadi semula lagi
                    dispatch({type: 'CHANGE_LOADING', value: false})
                    dispatch({type: 'CHANGE_LOGIN', value: false}) 
                    gagal(false)
            })
        }
    )

    
}
