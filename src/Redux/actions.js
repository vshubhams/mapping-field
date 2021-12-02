export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_ITEM = "ADD_ITEM";

export const REMOVE_CALL = "REMOVE_CALL";
export const ADD_CALL = "ADD_CALL";

export const removeItem = (payload)=>{
    return{
     type:REMOVE_ITEM,
     payload
    };
};
export const addItem = (payload)=>{
    return{
     type:ADD_ITEM,
     payload
    };
};
export const removeCall = (payload)=>{
    return{
     type:REMOVE_CALL,
     payload
    };
};
export const addCall = (payload)=>{
    return{
     type:ADD_CALL,
     payload
    };
};