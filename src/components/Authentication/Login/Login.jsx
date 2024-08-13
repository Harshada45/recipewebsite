import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [isLoading,setIsLoading]=useState(false);
  const loadingRef=useRef(null)
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("email", email);
    console.log("password", password);

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    console.log("email and password stored in localstorage");
    setIsLoading(false);


    navigate("/");
  };

 
  return (
    <div className={styles.loginpage}>
      <div className={styles.content}>
        <h3 className="text-center">Login Form</h3>
        <form className={styles.formcontent} onSubmit={handleSubmit}>
          <div class="form-group mb-3">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              ref={emailRef}
            />
           
          </div>
          <div class="form-group mb-5">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              ref={passwordRef}
            />
          </div>

          <div className=" text-center">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        {isLoading && (
        <div ref={loadingRef} style={{ marginTop: '20px', color: 'blue' }}>
          Loading, please wait...
        </div>
      )}
      </div>
    </div>
  );
};

export default Login;
