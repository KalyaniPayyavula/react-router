import React,{useContext} from 'react'
import messageContext from '../context/messageContext';
import Outer from '../components/outer'

function LoginPage(){
    return(
    <>
    <h1>Welcome to Home Page...</h1>
    <h1>{useContext(messageContext)}</h1>
    <Outer></Outer>
    </>
    )
}

export default LoginPage;
