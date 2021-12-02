import { ADD_CALL, ADD_ITEM, REMOVE_CALL, REMOVE_ITEM } from "./actions"

const initState = {
    sales: ["Name", "Lastname", "EmailId", "ContactId", "AccountId","Mobile","City","Postal Code","State"],
    callHub: ["Name", "Lastname", "EmailId", "ContactId", "AccountId","Mobile","City","Postal Code","State"]
}

export const reducer=(state = initState,{type,payload})=>{
    switch(type){
        case REMOVE_ITEM:
            return {
                ...state,
                sales:payload
            }
        case REMOVE_CALL:
            return {
                ...state,
                callHub:payload
            }
        case ADD_ITEM:
            return {
                ...state,
                sales:payload
            }
        case ADD_CALL:
            return {
                ...state,
                callHub:payload
            }
  
        default:
            return state
    }
}