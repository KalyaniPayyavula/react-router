import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Stack from '@mui/material/Stack'
import HomePage from './homePage'
import messageContext from '../context/messageContext'
import LoginPage from './LoginPage'

const ContactPage = () => <div>Welcome contact page</div>

function DataPage(){
  const [message, setMessage] = useState("im being shared")
    return(
    <>
    <LoginPage/>
        <BrowserRouter>
        <messageContext.Provider value={[message, setMessage]}>
        <Stack>
            <NavLink
            to="/"
            end
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
            id="home-nav-id"
            >home Page</NavLink>
           
            <NavLink 
            to="/contact"
            end
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
            id="contact-nav-id"
            >Contact Page</NavLink>
          
            <NavLink 
            to="/about"
            end
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
            id="about-nav-id"
            >About Page</NavLink>
          
            <NavLink
            to="users"
            end
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
            id="users-nav-id"
            >User Page</NavLink>
            </Stack>
         
        <Routes>
          <Route 
          path="/" 
          end
          element={<HomePage/>}/>
        
          <Route 
          path="/contact" 
          end
          element={<ContactPage />}/>

        <Route 
          path="/about" 
          end
          element = {<div>Welcome to about page</div>
        }
          />
    
         <Route 
          path="/users" 
          end
          element = {<div>Welcome user page</div>
        }
          />
          </Routes>
          </messageContext.Provider>
        </BrowserRouter>
        </>
    )
}

export default DataPage;