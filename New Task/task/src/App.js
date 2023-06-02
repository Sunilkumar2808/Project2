import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({ username: "", password: "" });

  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const reset = () => {
    setData({
      username: "", password: ""
    })
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    if (data.username === "") {
      alert("Please enter the username")
      return false;
    }
    else if (data.password === "") {
      alert("please enter the password")
    }
    else {
      alert("Form has been submitted")
      reset();
    }

  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <label>UserName</label>
            <input type="text" name="username" value={data.username} onChange={handlechange} />
          </div>
          <div>
            <label>password</label>
            <input type="text" name="password" value={data.password} onChange={handlechange} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button> add</button>
        </div>

      </form>
    </div>
  );
};

export default Form;
