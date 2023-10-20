import React from "react";
import { Link } from "react-router-dom";

import "./styles/login.css";
import "./styles/signup.css";
import leftsignup from "./assets/leftsignup.png";
import unhide from "./assets/unhide.png";

import vectors from "./assets/signupvectors.png";

function SignUp() {
  const changeType = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  return (
    <>
      <div className="container">
        <div className="leftsignup">
          <div className="leftcontainersignup">
            <img src={vectors} alt="vectors" />
          </div>
        </div>
        <div className="right">
          <div className="rightcontainer">
            <h5>SIGN UP</h5>
            <form method="post" action="/#">
              <div className="halffields">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  style={{ marginBottom: "20px" }}
                  required
                  className="inputfieldhalf"
                />
                <br />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  style={{ marginBottom: "20px" }}
                  required
                  className="inputfieldhalf"
                />
              </div>
              <div className="halffields">
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  style={{ marginBottom: "20px" }}
                  required
                  className="inputfieldhalf"
                />
                <br />
                <input
                  type="date"
                  name="name"
                  style={{ marginBottom: "20px" }}
                  required
                  className="inputfieldhalf"
                />
              </div>
              <div className="halffields">
                <input
                  type="text"
                  name="cname"
                  placeholder="Contact Number "
                  style={{ marginBottom: "20px" }}
                  required
                  className="inputfieldhalf"
                />
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  style={{ marginBottom: "20px" }}
                  required
                  className="inputfieldhalf"
                />
              </div>
              <input
                type="text"
                name="college"
                placeholder="Name of University/ College"
                style={{ marginBottom: "20px" }}
                required
              />
              <div className="halffields">
                <input
                  type="text"
                  name="Designation"
                  placeholder="Designation"
                  style={{ marginBottom: "20px" }}
                  required
                  className="inputfieldhalf"
                />
                <br />
                <input
                  type="text"
                  name="Regno"
                  placeholder="Registration Number"
                  style={{ marginBottom: "20px" }}
                  required
                  className="inputfieldhalf"
                />
              </div>
              <div className="halffields">
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  required
                  className="inputfieldhalf"
                />
                <br />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  required
                  className="inputfieldhalf"
                />
                <br />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  className="inputfieldhalf"
                />
              </div>
              <br />
              <input
                type="text"
                name="college"
                placeholder="Address"
                style={{ marginBottom: "20px" }}
                required
              />
              <div className="inputfield">
                <img
                  src={unhide}
                  alt="password"
                  className="passwordicon"
                  onClick={changeType}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="checkboxfield">
                <input
                  type="checkbox"
                  name="agreement"
                  required
                  id="agreement"
                />
                <label for="agreement">
                  Hereby, I agree to the <a href="#">Terms & Condition</a> and{" "}
                  <a href="#">Privacy Policy </a>
                </label>
              </div>

              <div className="submitbutton">
                <input
                  type="submit"
                  value="Login"
                  style={{
                    width: "50%",
                    fontsize: "14px",
                    padding: "10px",
                    background: "#F28D00",
                    color: "#fff",
                    justify: "center",
                    margin: "20px auto 20px auto",
                  }}
                />
              </div>
            </form>

            <p>
              Already Have an Account <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
