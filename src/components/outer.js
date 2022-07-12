import React,{useContext} from 'react'
import messageContext from '../context/messageContext'
import Inner from './inner'

let Outer = () =>{
    return(
        <div>
         <h1>Outer : {useContext(messageContext)}</h1>
         <Inner/>
        </div>
        
    )
}

export default Outer;