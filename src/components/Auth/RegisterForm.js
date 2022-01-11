import { Box, Paper, styled, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../../store/actions/authActions';
import { openSnackbar } from '../../store/actions/snackbarActions';
import { color, snackbarSeverity } from '../../utils/constants';

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
    textTransform: "uppercase",
    cursor: "pointer"
});

const txtFldSx = {
    "& > label": {
        fontFamily: "inherit"
    },
    "& > input": {
        width: "100%"
    },

}

const RegisterForm = () => {

    const dispatch = useDispatch();
    const initialRegisterForm = {
        username: "",
        password: "",
        confirmPassword: ""
    };

    const [registerForm, setRegisterForm] = useState(initialRegisterForm)

    const { username, password, confirmPassword } = registerForm;

    const handleInputChange = event => {
        setRegisterForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (username && password) {
            dispatch(registerRequest({username, password}));
        }
    }

    return (
        <FormContainer
            elevation={3}
            onSubmit={handleSubmit} component="form">
            <FormItem
                sx={{
                    textTransform: "uppercase",
                    fontWeight: 700,
                    fontSize: 18
                }}>
                Hello newbie!
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
                    sx={txtFldSx}
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleInputChange}
                />
            </FormItem>


            <FormItem>
                <TextField
                    label="Confirm password"
                    size="small"
                    sx={txtFldSx}
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={handleInputChange}
                />
            </FormItem>

            <FormItem>
                <FormButton type="submit">
                    Register
                </FormButton>
            </FormItem>

            <FormItem>
                Already have an account? <Link to="/login">Login</Link>
            </FormItem>

        </FormContainer>
    )
}

export default RegisterForm;
