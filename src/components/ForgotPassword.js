import React, { useState } from "react";
import "../styles/ForgotPassword.css";
import { toast, ToastContainer } from "react-toastify";

const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        " https://my-recipe-management-app.onrender.com/auth/forgotpassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        toast.success("Password Updated successfully");

        setTimeout(() => {
          window.location.href = "/login";
        }, 4000);
      } else {
        setMessage("An error occurred while updating the password.");
        toast.error("Error in Password update");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while updating the password.");
    }
  };

  return (
    <div className="container-fluid mt-5"
      style={{
        backgroundImage: `url(https://images5.alphacoders.com/904/904774.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card card1">
            <div className="card-body">
              <h2 className="text-center pb-3">Update Password</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>New Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group text-center">
                  {/* Use text-center class here */}
                  <button type="submit" className="btn btn-primary btn-block">
                    Update Password
                  </button>
                </div>
              </form>
              {message && (
                <p className="error-message text-danger mt-3">{message}</p>
              )}
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default UpdatePassword;