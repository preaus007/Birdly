import React from 'react';
import "./provider.scss"
import Lottie from 'lottie-react'
import GoogleAnimation from "../../../Assets/92753-google-logo.json"
const Google = () => {
    return (
        <button className='btn google-btn'>
            <Lottie className='google-animation' animationData={GoogleAnimation} loop={true}></Lottie>
            Sign Up with Google
        </button>
    );
};

export default Google;