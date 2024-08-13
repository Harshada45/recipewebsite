import React, { useState } from "react";
import styles from "./style.module.scss";

const Register = () => {
    const [formData,setFormData]=useState(
        {
            email:'',
            password:'',
            country:'',
            phone:''
            
        }
    );


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

  const handleSubmit = (e) => {
debugger
e.preventDefault()
    console.log({formData});
    
  };

  return (
    <div>
      <div className={styles.loginpage}>
        <div className={styles.content}>
          <h3 className="text-center">Register Form</h3>
          <form className={styles.formcontent} onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label for="exampleInputEmail1">UserName</label>
            </div>
            <div className="form-group mb-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="passsword"
                className="form-control"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-3">
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="text-center mt-5">
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
