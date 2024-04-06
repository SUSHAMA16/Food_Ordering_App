import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Cookies } from 'react-cookie';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container } from "reactstrap";
import "../styles/Login.css";

const cookies = new Cookies();

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userEmail, setUserEmail] = useState(""); 
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
            const res = await axios.post("http://localhost:8085/api/v1/employee/login", {
                email: email,
                password: password,
            });
            console.log(res.data);

            if (res.data.message === "Email not exists") {
                alert("Email not exists");
            } else if (res.data.message === "Login Success") {
                setUserEmail(email); 
                cookies.set('userEmail', email, { path: '/' }); 
                navigate('/home');
            } else {
                alert("Incorrect Email and Password do not match");
            }
        } catch (err) {
            alert(err);
        }
    }

    return (
        <Helmet title="Login">
            <CommonSection title="Login" />
            <section>
                <Container>
                    <div className="containerL">
                        <div className="form-container">
                            <h2>Login Here</h2>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter Email"
                                            value={email}
                                            onChange={(event) => {
                                                setEmail(event.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter Password"
                                            value={password}
                                            onChange={(event) => {
                                                setPassword(event.target.value);
                                            }}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </Helmet>
    );
}

export default Login;
