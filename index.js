import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'counter', 
    initialState: { counter: 0 }, 
    reducers: {
        increment (state, action) {
            state.counter += 1;
         },
        decrement (state, action) {
            state.counter -= 1;
         },
        addBy (state, action) { 
            state.counter += action.payload;
        },
        minusBy (state, action) { 
            state.counter -= action.payload;
        }
    }
})

//Extract the action creators from the slice
// export const  { increment, decrement, addBy, minusBy } = counterSlice.actions;
export const actions = counterSlice.actions;

//Create the store with the reducer generated by createSlice
const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store; 

//BELOW--BEFORE NPM INSTALL @ REDUXJS/TOOLKIT
// import { createStore } from "redux";

// const reducerFn = (state = {counter: 0}, action) => {

// //Synchronoug Function
// // We should not mutate the original state
// //ALWASY COPY OF ORIGINAL STATE

// if(action.type==="INC"){
//     return {counter:state.counter + 1};
// } else if (action.type === "DEC"){
//     return {counter:state.counter -1};
// }

// if(action.type === "ADD"){
//     return{counter: state.counter + action.payload};
// } else if (action.type ==="MIN") {
//     return {counter: state.counter - action.payload};
// }

// return state;
// }

// const store = createStore(reducerFn);

// export default store;