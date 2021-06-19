import React, { useState } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./SignIn.css";
const SignIn = () => {
  const [validEmail, setValidEmail] = useState(true);
  const [validPass, setValidPass] = useState(false);
  const [message, setMessage] = useState("");

  const emailRegex = /\S+@\S+\.\S+/;

  const handleEmail = (e) => {
    const email = e.target.value;
    if (emailRegex.test(email)) {
      setValidEmail(true);
      setMessage("");
    } else {
      setValidEmail(false);
      setMessage("Please enter a valid email address!");
    }
  };

  const handlePass = (e) => {
    setValidPass(e.target.value);
    console.log(e.target.value);
  };
  return (
    <section className="sign-in-container bg-white">
      <div className="row">
        {/* Right Part HTML Code Start */}
        <div className="col-md-8 col-sm-12 d-flex">
          <div className="col-md-10 account">
            <h4 className="pb-4">
              <b>Let's set up your account</b>
            </h4>
            <small>
              Already have an account? <a href="#">Sign in</a>{" "}
            </small>
            <form class="pt-5">
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example2"
                  class="form-control border w-75"
                />
                <label
                  class="form-label bg-white pt-0 mt-2"
                  for="form1Example2"
                >
                  Name
                </label>
              </div>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example1"
                  className={`form-control border w-75 ${validEmail} ${
                    validEmail ? "" : "error-border"
                  }`}
                  onChange={handleEmail}
                />
                <label
                  class={`form-label bg-white pt-0 mt-2 ${
                    validEmail ? "" : "error"
                  }`}
                  for="form1Example1"
                >
                  Email
                </label>
                <small className="error">{message}</small>
              </div>
              <div class="input-group mb-4 w-75">
                <select
                  class="form-select text-black-50 "
                  id="inputGroupSelect01"
                >
                  <option selected>I would describe my user type as</option>
                  <option value="1">Admin</option>
                  <option value="2">Moderator</option>
                  <option value="3">Editor</option>
                </select>
              </div>
              <div class="form-outline mb-4">
                <input
                  type="text"
                  onChange={handlePass}
                  id="form1Example2"
                  class="form-control border w-75"
                />
                <label
                  class="form-label bg-white pt-0 mt-2"
                  for="form1Example2"
                >
                  Password
                </label>
                <small className="text-black-50">
                  {validPass.length >= 8 ? " " : "Minimum 8 characters"}
                </small>
              </div>
              <div class="form-outline mb-4">
                <div class="mb-5">
                  <button
                    type="button"
                    class="btn btn-light shadow-none m-0 w-75"
                    data-mdb-color="dark"
                    disabled
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
            <div className="w-75">
              <small>
                By clicking the "Next" button, you agree to creating a free
                account, and to <a href="#">Terms of service </a>and{" "}
                <a href="#">Privacy Policy</a>
              </small>
            </div>
          </div>
          <div col-md-2>
            <small>
              <b>Step 1 of 3 .</b> . .
            </small>
          </div>
        </div>

        {/* Left Part HTML Code Start */}
        <div className="col-md-4 dummy-bg text-white">
          <div className="dummy-text">
            <h3 className="pt-5 pb-5">
              <b>Dummy Heading</b>
            </h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum,
              fuga in excepturi ipsam praesentium perferendis minima magni!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
