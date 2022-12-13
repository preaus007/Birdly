import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";


const Email = (props) => {
  const { type , login , signup } = props;
  let email;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const handleLogin = (data) =>
  {
    login(data.email , data.password)
  }


  const handleSignUp = data =>
  {
      signup(data.name , data.email, data.phnNumber , data.password)
  }



  if (type === "login") {
    return (
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email" 
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: { value: true, message: "email is required" },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
            {...register("password", {
              required: { value: true, message: "password required" },
              minLength: { value: 16, message: "Provide 16 or longer" },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        <input
          value="Login"
          className="btn w-full w text-white"
          type="submit"
        />
      </form>
    );
  } else if (type === "signup") {
    return (
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: { value: true, message: "Name is required" },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: { value: true, message: "email is required" },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>

          <input
            type="text"
            placeholder="Enter Phone Number"
            class="input input-bordered w-full max-w-xs"
            {...register("phnNumber", {
              required: { value: true, message: "Phone number required" },
              maxLength: { value: 11, message: "Provide 11 or longer" },
              minLength: { value: 11, message: "Provide 11 Number" },
            })}
          />
          <label className="label">
            {errors.phnNumber?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.phnNumber.message}
              </span>
            )}
            {errors.phnNumber?.type === "minLength" && (
              <span class="label-text-alt text-red-500">
                {errors.phnNumber.message}
              </span>
            )}
            {errors.phnNumber?.type === "maxLength" && (
              <span class="label-text-alt text-red-500">
                {errors.phnNumber.message}
              </span>
            )}
          </label>
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            class="input input-bordered w-full max-w-xs"
            {...register("password", {
              required: { value: true, message: "password required" },
              minLength: { value: 8, message: "Provide 6 or longer" },
            })}
          />
          <label class="label">
            {errors.password?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span class="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        <input
          value="Sign Up"
          className="btn w-full w text-white"
          type="submit"
        />
      </form>
    );
  }
};

export default Email;
