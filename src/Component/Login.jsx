import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let [login, setlogin] = useState({
        username: "",
        password: ""
    })
    var navigate=useNavigate()
    function getData(name, value) {
        setlogin((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }
    function postData() {
    localStorage.setItem("login",true)
    localStorage.setItem("username",login.username)
    navigate("/profile") 

    }
    return (
        <Grid container spacing={2}>
            <Grid item md={2} xs={12}>
            </Grid>
            <Grid item md={8} xs={12}>
                
                    <h5 className='background text-center text-light p-1'>Login Section</h5>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '98%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            onChange={(e) => {
                                getData(e.target.name, e.target.value)
                            }}
                            id="outlined-username-input"
                            label="UserName*"
                            type="text"
                            autoComplete="current-username"
                            placeholder='Enter your user name to login'
                            name='username'
                        />
                        <TextField
                            onChange={(e) => {
                                getData(e.target.name, e.target.value)
                            }}
                            id="outlined-password-input"
                            label="Password*"
                            type="password"
                            autoComplete="current-password"
                            placeholder='Enter your password'
                            name='password'
                        />
                        <Button variant="contained" className='background' onClick={postData} color="success">
                            Login
                        </Button>
                        <div className='d-flex justify-content-between'>
                            <Link href="#" color="inherit" underline="none">Forget Password?</Link>
                            <Link href="/Signup" color="inherit" underline="none">New user? create a account</Link>
                        </div>
                    </Box>
            
            </Grid>
            <Grid item md={2} xs={12}>
            </Grid>
        </Grid>
    )
}
