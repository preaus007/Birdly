import  Lottie from 'lottie-react';
import React from 'react';
import githubAnim from "../../../Assets/81333-github.json"

const Github = (props) => 
{
    const { githubSignIn } = props
    return (
        <button className='btn githubBtn' onClick={githubSignIn}>
            
            <Lottie className='git-animation' animationData={githubAnim} loop={true}></Lottie>
            Sign up with github 
        </button>
    );
};

export default Github;