import React, { Component } from "react";
import "./SignUp.css";
import { API } from "../../config";

export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            click: false,
            values_su: {
                name: "",
                email: "",
                mobile_no: 0,
                password: "",
                error: "",
                success: false,
            },
        };
    }

    handleChangeSU = (eventName) => (event) => {
        this.setState({
            values_su: {
                ...this.state.values_su,
                error: false,
                success: true,
                [eventName]: event.target.value,
            },
        });
    };

    handleClick = () => {
        this.setState({ click: !this.state.click });
        console.log(API);
    };

    signup = (user) => {
        return fetch(`${API}/signup`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

            body: JSON.stringify(user),
        })
            .then((res) => {
                return res.json();
            })
            .catch((err) => console.log(err));
    };

    clickSubmit = (e) => {
        e.preventDefault();
        const { name, email, mobile_no, password } = this.state.values_su;
        this.signup({ name, email, mobile_no, password });
    };

    render() {
        return (
            <div className="body">
                <div
                    className={
                        this.state.click
                            ? "container sign-up-active"
                            : "container"
                    }
                >
                    <div className="form-container sign-in-container">
                        <form action="/">
                            <h2>Sign in</h2>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="/">Forgot password?</a>
                            <button>Sign in</button>

                            <span>or login using</span>

                            <div className="social-media-container">
                                <a href="/" className="social">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="/" className="social">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="/" className="social">
                                    <i className="fab fa-google"></i>
                                </a>
                            </div>
                        </form>
                    </div>

                    <div className="form-container sign-up-container">
                        <form action="/">
                            <h2>Create Account</h2>
                            <input
                                onChange={this.handleChangeSU("name")}
                                type="text"
                                placeholder="Name"
                                value={this.state.values_su.name}
                            />
                            <input
                                onChange={this.handleChangeSU("email")}
                                type="email"
                                placeholder="Email"
                                value={this.state.values_su.email}
                            />
                            <input
                                onChange={this.handleChangeSU("mobile_no")}
                                type="tel"
                                placeholder="Mobile Number"
                                value={this.state.values_su.mobile_no}
                            />
                            <input
                                onChange={this.handleChangeSU("password")}
                                type="password"
                                placeholder="Password"
                                value={this.state.values_su.password}
                            />
                            <button onClick={this.clickSubmit}>Sign up</button>

                            <span>or sign up using</span>

                            <div className="social-media-container">
                                <a href="/" className="social">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="/" className="social">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="/" className="social">
                                    <i className="fab fa-google"></i>
                                </a>
                            </div>
                        </form>
                    </div>

                    <div className="side-container">
                        <div className="overlay">
                            <div className="side-panel left-panel">
                                <h1>Already a member?</h1>
                                <p>We have new buyers waiting for you</p>
                                <button
                                    className="side-btn"
                                    id="signIn"
                                    onClick={this.handleClick}
                                >
                                    Sign in
                                </button>
                            </div>
                            <div className="side-panel right-panel">
                                <h1>New here?</h1>
                                <p>
                                    Start selling your products to a large
                                    community of retailers
                                </p>
                                <button
                                    className="side-btn"
                                    id="signUp"
                                    onClick={this.handleClick}
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
