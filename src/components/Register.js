import React, { useState } from "react";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import '../styles/register.css'


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false); // State to control the error message visibility
  const Email = email.toLowerCase();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      // If any of the fields are empty, show the error message
      setShowError(true);
      return; // Prevent further execution
    }

    try {
      const response = await fetch(
        "https://recipe-app-mern.onrender.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email: Email, password }),
        }
      );

      if (response.ok) {
        const user = await response.json();

        if (user.error) {
          toast.warn("User already exists. Try with different email");
        } else {
          toast.success("Registration successful.");
          localStorage.setItem("token", user.token);
          setTimeout(() => {
            window.location.href = "/";
          }, 4000);
        }
      } else {
        console.error("Failed to register user:", response.status);
      }
    } catch (error) {
      toast.error("An error occurred while registering user:", error);
    }
  };

  return (
    <div
      className="fluid-container mt-3 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="w-50">
        <div className="col-md-16">
          <div className="card">
            <div className="card-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <h2 className="text-center pb-3">SignUp</h2>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control mt-4"
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
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block mx-auto">
                    Submit
                  </button>
                </div>
              </form>
              {showError && (
                <span className="fill-fields-error text-danger">
                  Please Fill all the fields
                </span>
              )}
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
    
};

export default Register;