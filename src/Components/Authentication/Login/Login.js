import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Email from "../Providers/Email";

const Login = () => 
{

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  

  return (
    <section className="login-container">
    <article className="container ml-auto mr-auto p-16">
    <div className="flex items-center my-10">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-xl font-semibold">
              Please Log in to Our App
            </h2>
            <Email type="login" login={signInWithEmailAndPassword}></Email>
            <div class="divider">OR</div>

            <p>
              New in Birdly ? Register{" "}
              <Link to="/signup" className="text-red-500">
                Here
              </Link>{" "}
              Now
            </p>
          </div>
        </div>
      </div>
    </article>
      
    </section>
  );
};

export default Login;
