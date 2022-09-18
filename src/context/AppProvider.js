import React from 'react'
import { useReducer } from 'react'
import {  createContext } from 'react';

const dispatchContext = createContext();
const stateContext = createContext();

function AppProvider({children}) {
    

   const initialState = {
        cartItem :  [],
    };
    const reduser = ( state , action ) =>{
      
      switch(action.type){
        case 'add_to_cart' : 
        return { ...state, cartItem : [...state.cartItem , action.payload ]  }

        default : 
        return state;
      }
    }

let [state,dispatch] = useReducer(reduser,initialState)


  return (
    <dispatchContext.Provider value={dispatch}>
    <stateContext.Provider value={state}>
        { children }
    </stateContext.Provider>
    </dispatchContext.Provider>
  )
}

export {AppProvider , dispatchContext , stateContext }
