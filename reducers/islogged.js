const loggedReducer = (state = true, action)=>{
    if(action.type === "SIGN_IN"){
        return state = true;
    }
    else if(action.type === "LOGOUT"){
        return state = false;
    }
    else{
        return state
    }
}

export default loggedReducer;