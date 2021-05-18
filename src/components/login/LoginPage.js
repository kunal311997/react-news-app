import { useState } from 'react'
import { LOGIN_API_URL } from '../../constants/Constants'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

import Home from '../home/Home'


export default function LoginPage() {

    // const [isLoading, setIsLoading] = useState(true);
    const [loginParams, setLoginParams] = useState({ userName: '', password: '' })
    const [redirectToHome, setRedirectToHome] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setLoginParams({ ...loginParams, [name]: value })
    }

    const onLoginClick = (e) => {
        e.preventDefault();

        const callLogin = async () => {
            const loginRes = await callLoginApi()
            console.log(loginRes.statusCode)
            if (loginRes.statusCode === 200) {
                setRedirectToHome(true)
            }
        }

        if (loginParams.userName && loginParams.password) {
            callLogin()
        } else {
            alert('Please enter values')
        }
    }

    const callLoginApi = async () => {
        const res = await fetch(LOGIN_API_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(loginParams)

        })
        const data = await res.json()
        console.log(data)
        return data
    }


    return (
        <Router>
            {redirectToHome && <Redirect push to="/home" />}
            <Route path='/' exact render={(props) => (
                <div className="login-container">
                    <div className="login-container-sub-div">
                        <div className="login-blue-div">
                            <h1>Welcome to News App</h1>
                            <hr className="white-horizontal-line" />
                            <p style={{ marginTop: '20px' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
       specimen book.</p>
                            <h3 className="white-rounded-button">Know More</h3>

                        </div>

                        <div className="login-white-div">
                            <form style={{
                                width: '100%', display: 'flex',
                                flexDirection: 'column', alignItems: 'center'
                            }}
                                autoComplete="off">
                                <h1>Sign In</h1>
                                <hr className="blue-horizontal-line" />
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    placeholder="Enter Username"
                                    value={loginParams.userName}
                                    onChange={handleChange} />

                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={loginParams.password}
                                    onChange={handleChange} />
                                <button type="submit" onClick={onLoginClick}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            )} />
            <Route path='/home' component={Home} />
        </Router>
    )
}