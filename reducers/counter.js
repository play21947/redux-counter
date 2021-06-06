const counterReducer = (state = 0, action)=>{
    if(action.type == "INCREMENT"){
        return state + action.payload
    }
    else if(action.type == "DECREMENT"){
        return state - 1
    }
    else{
        return state
    }
}

export default counterReducer;