import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import useAuth from "../user/useAuth.jsx";

function OrganizationDetails() {
    let url = "https://voluntrackerapi.azurewebsites.net/UserJoinsOrg"
    let navigate = useNavigate();
    let path = "/organizations";
    let pathUnauthenticated = "/user/login";
    const { state: { name, description, organizationID } } = useLocation();
    const { jwt, login, logout, isAuthenticated } = useAuth();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const token = jwt;
        if (token) {
            const decodedToken = parseJwt(token);
            setUserInfo(decodedToken);
        }
    }, []);

    function parseJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
        return JSON.parse(jsonPayload);
    }

    const handleSubmit = (e) => {
        if (isAuthenticated()) {
            e.preventDefault();
            const currentDate = new Date().toISOString();
            const data = {
                'memberID': userInfo.memberID,
                'orgID': organizationID,
                'hoursWorked': 0,
                'role': 'user',
                'joinDate': currentDate
            };
            fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
                .then(async response => {
                    console.log('Response status:', response.status);

                    if (!response.ok) {
                        const error = 'An error occurred';
                        return Promise.reject(error);
                    }
                    console.log('Join successful');
                    navigate(path);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        } else {
            navigate(pathUnauthenticated);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Organization Details: {name}</h2>
                <p>{description}</p>
                <button type="submit" className="join-org-button">Join Organization</button>
            </form>
        </div>
    );
};

export default OrganizationDetails;