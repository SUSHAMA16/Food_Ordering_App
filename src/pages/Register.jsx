//import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



import {  useState } from "react";
import axios from "axios";
import "../styles/Register.css";

function Register() {
  
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/employee/save", {
          employeename: employeename,
          email: email,
          password: password,
         
          
          });
          alert("Your Registration is successfully completed.");

        } catch (err) {
          alert(err);
        }
      }
  
    return (
        <Helmet title="Register">
        <CommonSection title="Register" />
        <section>
         <Container> 
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>Sign Up</h1>
    
    <form>
        <div class="form-group">
          <label>User name</label>
          <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
          value={employeename}
          onChange={(event) => {
            setEmployeename(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>

        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>

        <br></br>

        <a href="/Login">
        <p>Already Have an Account? Login here</p>
        </a>
        

       
      </form>
    </div>
    </div>
     </div>
     </Container>
      </section>
    </Helmet>
    );
  }
  
  export default Register;