
const initialState = {
    popup: 'Estu Jalanin Redux Global',
    isLogin: false,
    user: 'BELOM ganti user'
}
  
const reducer = (state=initialState, action) =>{
    if(action.type === 'CHANGE_POPUP'){
        return {
        ...state,
        popup: action.value
        }
    }
    if(action.type === 'CHANGE_LOGIN'){
        return {
        ...state,
        isLogin: action.value
        }
    }
    if(action.type === 'CHANGE_USER'){
        return {
        ...state,
        user: action.value
        }
    }
    return state;
}

export default reducer;