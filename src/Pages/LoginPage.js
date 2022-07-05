import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { PropTypes } from 'prop-types';

function LoginPage({onClick}){
    return(
    <Stack spacing={2} style={{width: "25%", marginLeft: "35%"}}>
      <TextField
      id="username-id"
      label="Username" 
      variant="standard">
     </TextField>
     <TextField
      id="password-id"
      label="Password" 
      type="password"
      variant="standard">
     </TextField>
      <Button variant = "contained" id="login-button-id" onClick={onClick}>Login</Button>
      </Stack>
    )
}

export default LoginPage;
LoginPage.propTypes = {
    onClick : PropTypes.func.isRequired
}