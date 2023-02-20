import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


function Signup(props) {
  const [creds, setCreds] = useState({name: "", email: "", password:"", confirmPassword: ""});
  const navigate = useNavigate();

  // handling submit button and call login api
  const handleSubmit = async (e) => {
      e.preventDefault();     // preventing from loading page

      let response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: Array.isArray(creds.name) ? creds.name[0] : "",
            email: Array.isArray(creds.email) ? creds.email[0] : "", 
            password: Array.isArray(creds.password) ? creds.password[0] : "",
            confirmPassword: Array.isArray(creds.confirmPassword) ? creds.confirmPassword[0] : ""
          })
      });
      response = await response.json();

      if (response.success) {
          localStorage.setItem('token', response.authtoken);
          navigate("/");
          props.showAlert("Account Created Successfully.", "success");
      } else {
          props.showAlert("Invalid Credentials!", "danger");
      }
  }

  // for change input value
  const onChange = (e) => {
    setCreds({...creds, [e.target.name] : [e.target.value] });
  }

  return (
    <div>
      <h2>Signup for use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' value={creds.name} onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={creds.email} onChange={onChange} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' value={creds.password} onChange={onChange} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" name='confirmPassword' value={creds.confirmPassword} onChange={onChange} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
