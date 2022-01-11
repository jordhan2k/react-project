import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({component: Component}) => {

    const {isAuthenticated} = useSelector(state => state.auth);

    return isAuthenticated ? <Component /> : <Navigate replace to="/login" />
}

export default ProtectedRoute
