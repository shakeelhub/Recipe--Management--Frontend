import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const Email = email.toLowerCase();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setShowError(true);
      return;
    }

    try {
      let response = await fetch(
        "https://recipe-app-mern.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: Email, password }),
        }
      );

      response = await response.json();

      if (!response.error) {
        toast.success("Login Successful");
        localStorage.setItem("token", response.token);

        setTimeout(() => {
          window.location.href = "/";
        }, 4000);
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      console.error("An error occurred while registering user:", error);
    }
  };

  return (
    <div className="container-fluid mt-5 position-relative" style={{
      backgroundImage: `url(https://wallpaperaccess.com/full/2882747.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card card1">
            <div className="card-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <h2 className="text-center pb-3">Login</h2>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group button">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <Link to="/forgotPassword" className="text-muted">
                  Forgot Password
                </Link>
                {showError && (
                  <span className="fill-fields-error text-danger">
                    Please Fill all the fields
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );

};

export default Login;