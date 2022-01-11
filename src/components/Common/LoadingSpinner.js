import React from 'react'
import Lottie from 'react-lottie';
import loading from '../../assets/lottie/loading.json';


const LoadingSpinner = () => {
    return (
        <Lottie options={{animationData: loading}} height={400}/>
    )
}

export default LoadingSpinner;
