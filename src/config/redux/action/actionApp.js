// kumpulan action untuk sebelum di ekesekusi ke reducer redux


// set timeout memakai redux-thunx jadi nunggu delay 2 detik, baru di return/dispatch
export const actionGantiUser = () => {
    return (dispatch) => {
        setTimeout(() => {
            return dispatch({type: 'CHANGE_USER', value: 'Sudah di ganti username'})
        }, 2000)
    }
}