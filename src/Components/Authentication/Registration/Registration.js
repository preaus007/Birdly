import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Email from "../Providers/Email";
import Github from "../Providers/Github";
import Google from "../Providers/Google";

const Registration = () => 

{

  const [
    createUserWithEmailAndPassword,
    emailUser,
    emailLoading,
    emailError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

 
  return (
    <section className="signup-container">
      <div className="container ml-auto mr-auto p-16">
        <div className="flex  flex-row-reverse  my-10">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="text-center text-xl font-semibold">
                Please Register in Our App
              </h2>
              <Email type="signup" signup ={createUserWithEmailAndPassword}></Email>
              <div class="divider">OR</div>
              <Google googleSignIn = {signInWithGoogle}></Google>
              <Github  githubSignIn = {signInWithGithub}></Github>

              <p>
                Already in Birdly ? Login{" "}
                <Link to="/login" className="text-red-500">
                  Here
                </Link>{" "}
                Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
