import React, { Component } from "react";
import "./SignUp.css";

export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            click: false,
        };
    }

    handleClick = () => {
        this.setState({ click: !this.state.click });
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
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="tel" placeholder="Mobile Number" />
                            <input type="password" placeholder="Password" />
                            <button>Sign up</button>

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
