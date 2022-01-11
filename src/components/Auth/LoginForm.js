import { Box, styled, TextField } from '@mui/material';
import React, { useState } from 'react';
import { color } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../store/actions/authActions';

const FormContainer = styled(Box)({
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transform: "translateY(-10px)",
    minWidth: 300,
    backgroundColor: "white",
    boxShadow: "0 0 5px 2px rgba(0,0,0, .1)",
    borderRadius: 10
});

const FormItem = styled(Box)({
    marginBottom: 10
});

const FormButton = styled('button')({
    padding: "10px 15px",
    fontFamily: "inherit",
    backgroundColor: color.primaryGreen,
    color: "white",
    fontWeight: 500,
    borderRadius: 5,
    border: "none",
    textTransform: "uppercase"
});

const txtFldSx = {
    width: "100%",
    "& > label": {
        fontFamily: "inherit"
    }
}

const LoginForm = () => {

    const dispatch = useDispatch();
    const initialLoginForm = {
        username: "",
        password: "",
    };

    const [loginForm, setLoginForm] = useState(initialLoginForm);

    const { username, password } = loginForm;

    const handleInputChange = event => {
        setLoginForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (username && password) {
            dispatch(loginRequest({username, password}));
            setLoginForm(initialLoginForm);
        }
    }

    return (

        <FormContainer
            elevation={3}
            component="form"
            onSubmit={handleSubmit}
        >
            <FormItem
                sx={{
                    textTransform: "uppercase",
                    fontWeight: 700,
                    fontSize: 18
                }}>
                Welcome back!
            </FormItem>

            <FormItem>
                <TextField
                    label="Username"
                    size="small"
                    sx={txtFldSx}
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                />
            </FormItem>

            <FormItem>
                <TextField
                    label="Password"
                    size="small"
                    type="password"
                    name="password"
                    value={password}
                    sx={txtFldSx}
                    onChange={handleInputChange}
                />
            </FormItem>

            <FormItem>
                <FormButton type="submit">
                    Login
                </FormButton>
            </FormItem>

            <FormItem>
                New to our app? <Link to="/register">Register</Link>
            </FormItem>
        </FormContainer>


    )
}

export default LoginForm
