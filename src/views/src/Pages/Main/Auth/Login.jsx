import { useState } from "react";

import axios from "axios";

const Login = () => {
  const [login_data, user_data] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    user_data({ ...login_data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5454/api/users/login", login_data)
        .then((response) => {
          if (response.data.status === 200) {
            console.log(response.data);
          }else{
            console.log(response.data)
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    } catch (err) {
      console.log(`Api Not Hit ${err.message}`);
    }
  };

  return (
    <>
      <div className="row mt-4">
        <h5 className="text-center "> Login Client Admin</h5>
      </div>
      <div className="container mt-4">
        <div className="row ">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card p-4 ">
              <form onSubmit={handleSubmit}>
                {/* email */}
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control bg-light"
                    id="Email"
                    placeholder="Email"
                    name="email"
                    value={login_data.email}
                    onChange={handleChange}
                    required
                  ></input>
                </div>

                {/* password */}
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control bg-light"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={login_data.password}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="d-grid gap-2 col-4 mx-auto">
                  <button type="submit" className="btn btn-dark rounded-pill ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
// 03433538 