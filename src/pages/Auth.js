import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';
import { authStates, color } from '../utils/constants';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const Container = styled(Box)({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.primaryGray
})

const Auth = ({ authRoute }) => {
    const { isAuthenticated, authState } = useSelector(state => state.auth);


    let body;
    if (authState === authStates.LOADING) {

        body = <LoadingSpinner />
    }
    if (!isAuthenticated && authState === authStates.IDLE) {
        if (authRoute === "login") {
            body = <LoginForm />
        }
        if (authRoute === "register") {
            body = <RegisterForm />
        }
    }

    if (isAuthenticated) {
        return <Navigate replace to="/dashboard"/>;
    }



    return (
        <Container>
            {body}
        </Container>
    );
}

export default Auth;
