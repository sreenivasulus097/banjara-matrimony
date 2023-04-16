import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    commonData:[]
}

const filterResults = (isMobile, signUpToggle) =>{
    return isMobile
}

const generalSlice = createSlice({
    name:"general",
    initialState,
    reducers:{
        generalData : (state,action) => {
            const {isMobile, signUpToggle} = action.payload;
            console.log("general redux data",isMobile,signUpToggle);
const result = filterResults(isMobile,signUpToggle);
return {...state,commonData : result}
        }
    },
    //special reducer for hydrating the state
 /*   extraReducers:(builder) => {
        builder.addCas
        [HYDRATE]: (state,action)=>{
return{
    ...state,
    ...action.payload
};
        }
    }, */
})

export default generalSlice.reducer;
export const {generalData} = generalSlice.actions;