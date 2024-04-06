import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { Container } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/logout.css";

const cookies = new Cookies();

function Logout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        
        cookies.remove('userEmail');
        setIsLoggedIn(false); 
        navigate('/home');
    };

    
    useState(() => {
        const userEmail = cookies.get('userEmail');
        setIsLoggedIn(!!userEmail);
    }, []);

    return (
        <Helmet title="Logout">
            <CommonSection title="Logout" />
            <Container className="log-container">
                <div>
                    
                    {isLoggedIn ? (
                        <button className="logou-button" onClick={handleLogout}>Logout From Your Account</button>
                    ) : (
                        <p className="logoy-p">You are already logged out.</p>
                    )}
                </div>
            </Container>
        </Helmet>
    );
}

export default Logout;