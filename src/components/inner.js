import React,{useContext} from 'react'
import messageContext from '../context/messageContext'

let Inner = () =>{
    const [message, setMessage] = useContext(messageContext)
    return(
        <>
        <h1>Inner : {message}</h1>
        <button onClick={()=>{setMessage(Math.random().toString())}}>click</button>
        </>
    )
}

export default Inner;