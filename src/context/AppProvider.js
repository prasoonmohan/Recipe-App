import React from 'react'
import { useReducer } from 'react'
import {  createContext } from 'react';

const dispatchContext = createContext();
const stateContext = createContext();

function AppProvider(props) {
    console.log(props);

   const initialState = {
        cartItem : [],
    };
    const reduser = ( state , action ) =>{
        // switch(){
        //     case 1:

        //     default :
        // }
    }

let [state,dispatch] = useReducer(reduser,initialState)


  return (
    <dispatchContext.provider value={dispatch}>
    <stateContext.provider value={state}>
        { props.children }
    </stateContext.provider>
    </dispatchContext.provider>
  )
}

export {AppProvider , dispatchContext , stateContext }
