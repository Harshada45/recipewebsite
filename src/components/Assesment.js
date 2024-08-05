import React from "react";
import { useState } from "react";
import axios from "axios";

const Assesment = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");
  const [postCode, setPostCode] = useState("");
  const [address, setAddressLine1] = useState("");
  const [address2, setAddressLine2] = useState("");
  const [panError, setPanError] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [panValid, setPanValid] = useState("");
  function getFormData(e) {
    console.warn(name, number, email, pan, address);
    e.preventDefault();
  }
  const onChange = async (event) => {
    setPanError();
    const value = event.target.value.toUpperCase();
    if (value.length <= 10) setPan(value);
    if (value.length > 9) {
      try {
        const response = await axios.post(
          "https://lab.pixel6.co/api/verify-pan.php",
          {
            panNumber: value,
          }
        );
        if (response.data.status === "Success" && response.data.isValid) {
          setPanError(response.data.isValid);
        }
      } catch (error) {
        console.error("Error verifying PAN:", error);
      }
    }
  };
  const State = async (event) => {
    const postcard = event.target.value;
    try {
      const response = await axios.post(
        "https://lab.pixel6.co/api/get-postcode-details.php",
        {
          panNumber: postcard,
        }
      );
      if (response.data.status === "Success" && response.data.isValid) {
        setPanError(response.data.isValid);
      }
    } catch (error) {
      console.error("Error verifying PAN:", error);
    }
  };
  const onClear = () => {
    setName("");
    setNumber("");
    setEmail("");
    setPan("");
    setAddressLine1("");
    setAddressLine2("");
    setPostCode("");
    setState("");
    setCity("");
    setPanError("");
    setPanValid(false);
  };

  const [selectedValue, setSelectedValue] = useState('');

  // Handle the change event
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'state') {
      setState(value);
    } else if (name === 'city') {
      setCity(value);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="main-form mx-auto">
          <h2 className="text-center pb-3">Customer Form</h2>
          <form onSubmit={getFormData}>
            <div className="mb-3 row">
              <label htmlFor="name" className="col-sm-3 col-form-label">
                Enter Name
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="number" className="col-sm-3 col-form-label">
                Enter Number
              </label>
              <div className="col-sm-9">
                <input
                  type="number"
                  className="form-control"
                  value={number}
                  name="number"
                  placeholder="Enter Mobile Number"
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="email" className="col-sm-3 col-form-label">
                Enter Email
              </label>
              <div className="col-sm-9">
                <input
                  type="email"
                  value={email}
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="pan" className="col-sm-3 col-form-label">
                Enter PAN
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  value={pan}
                  name="pan"
                  className="form-control"
                  placeholder="Enter Pan Number"
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            {panError == true && (
              <>
                {" "}
                <p className="textdanger">PAN is valid</p> <br />
              </>
            )}

            <div className="mb-3 row">
              <label htmlFor="address" className="col-sm-3 col-form-label">
                Enter Address
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="address"
                  value={address}
                  className="form-control"
                  placeholder="Enter Address Line 1"
                  onChange={(e) => setAddressLine1(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label
                htmlFor="address"
                className="col-sm-3 col-form-label"
              ></label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="address2" 
                  value={address2}
                  className="form-control"
                  placeholder="Enter Address Line 2"
                  onChange={(e) => setAddressLine2(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="post" className="col-sm-3 col-form-label">
                Enter Post Code
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="postcode"
                  value={postCode}
                  className="form-control"
                  placeholder="Enter Post Code"
                  onChange={state}
                  required
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="post" className="col-sm-3 col-form-label">
                State
              </label>
              <div className="col-sm-3">
                {/* <select
                    value={state}
                    className="form-control"
                    onChange={(e) => setState(e.target.value)}
                    required
                  /> */}

                <select class="form-select" aria-label="Default select example" name="state" value={state}   onChange={handleChange} >
                  <option selected value="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <label htmlFor="post" className="col-sm-2 col-form-label">
                City
              </label>
              <div className="col-sm-3">
                <select class="form-select" aria-label="Default select example" name="city" value={city}   onChange={handleChange} >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="text-center mt-5">
              <button type="submit" className="btn btn-primary  sub-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Assesment;
