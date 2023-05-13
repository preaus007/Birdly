import React from 'react';
import "./provider.scss"
import Lottie from 'lottie-react'
import GoogleAnimation from "../../../Assets/92753-google-logo.json"

const Google = (props) => 
{
    const { googleSignIn } = props;
    return (
        <button className='btn google-btn' onClick={() => googleSignIn()}>
            <Lottie className='google-animation' animationData={GoogleAnimation} loop={true}></Lottie>
            Sign Up with Google
        </button>
    );
};

export default Google;