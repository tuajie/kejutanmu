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

export const registerUserAPI = (data) => (dispatch) => {
    dispatch({type: 'CHANGE_LOADING', value: true})
    return (
        firebaseSetting.auth().createUserWithEmailAndPassword(data.email, data.password)
            // Handle Suksess here.
            .then(res => {
                console.log('success: ', res);
                dispatch({type: 'CHANGE_LOADING', value: false})
            })
            // Handle Errors here.
            .catch(function(error) { 
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                dispatch({type: 'CHANGE_LOADING', value: false})
          })
    )
}