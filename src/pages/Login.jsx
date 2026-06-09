//with the help of Claude Ai I copied the login with some edit from Phase 1

import { useState } from "react";
//import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    
    const [mode, setMode] = useState("login"); 

    
    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirm, setConfirm]   = useState("");

    
    const [showPass, setShowPass]    = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [errors, setErrors]        = useState({});
    const [submitted, setSubmitted]  = useState(false);


    function validate() {
        const e = {};
        if (mode === "signup" && !username.trim())
            e.username = "Username is required.";
        if (!email.trim())
            e.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            e.email = "Enter a valid email address.";
        if (!password)
            e.password = "Password is required.";
        else if (mode === "signup" && password.length < 8)
            e.password = "Password must be at least 8 characters.";
        if (mode === "signup" && password !== confirm)
            e.confirm = "Passwords do not match.";
        return e;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        setSubmitted(true);
        setTimeout(() => navigate("/"), 1800);
    }

    function switchMode(next) {
        setMode(next);
        setErrors({});
        setSubmitted(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setConfirm("");
    }

    const platforms = [
        { label: "Steam",       color: "#66c0f4" },
        { label: "PlayStation", color: "#66a0ff" },
        { label: "Xbox",        color: "#9bf00b" },
        { label: "Nintendo",    color: "#ff4d4d" },
    ];

    return (
        <div>
            <Navbar />

            <div className="loginPage">
                <div className="loginCard">

                    {}
                    <div className="loginBrand">
                        <span className="loginBrandBadge">G</span>
                        <span className="loginBrandName">GameStream</span>
                    </div>

                    {}
                    <div className="loginTabs">
                        <button
                            className={`loginTab ${mode === "login" ? "active" : ""}`}
                            onClick={() => switchMode("login")}
                        >
                            Log In
                        </button>
                        <button
                            className={`loginTab ${mode === "signup" ? "active" : ""}`}
                            onClick={() => switchMode("signup")}
                        >
                            Sign Up
                        </button>
                    </div>

                    {}
                    {submitted && (
                        <div className="loginSuccess">
                            {mode === "login" ? "✅ Welcome back! Redirecting…" : "✅ Account created! Redirecting…"}
                        </div>
                    )}

                    {}
                    {!submitted && (
                        <form className="loginForm" onSubmit={handleSubmit} noValidate>

                            {mode === "signup" && (
                                <div className="loginField">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        id="username"
                                        type="text"
                                        className={`loginInput ${errors.username ? "loginInputError" : ""}`}
                                        placeholder="Pick a username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        autoComplete="username"
                                    />
                                    {errors.username && <span className="loginError">{errors.username}</span>}
                                </div>
                            )}

                            <div className="loginField">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className={`loginInput ${errors.email ? "loginInputError" : ""}`}
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    autoComplete="email"
                                />
                                {errors.email && <span className="loginError">{errors.email}</span>}
                            </div>

                            <div className="loginField">
                                <label htmlFor="password">Password</label>
                                <div className="loginInputRow">
                                    <input
                                        id="password"
                                        type={showPass ? "text" : "password"}
                                        className={`loginInput ${errors.password ? "loginInputError" : ""}`}
                                        placeholder={mode === "signup" ? "At least 8 characters" : "Your password"}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        autoComplete={mode === "signup" ? "new-password" : "current-password"}
                                    />
                                    <button
                                        type="button"
                                        className="loginEye"
                                        onClick={() => setShowPass(v => !v)}
                                        aria-label={showPass ? "Hide password" : "Show password"}
                                    >
                                        {showPass ? "🙈" : "👁️"}
                                    </button>
                                </div>
                                {errors.password && <span className="loginError">{errors.password}</span>}
                            </div>

                            {mode === "signup" && (
                                <div className="loginField">
                                    <label htmlFor="confirm">Confirm Password</label>
                                    <div className="loginInputRow">
                                        <input
                                            id="confirm"
                                            type={showConfirm ? "text" : "password"}
                                            className={`loginInput ${errors.confirm ? "loginInputError" : ""}`}
                                            placeholder="Repeat your password"
                                            value={confirm}
                                            onChange={e => setConfirm(e.target.value)}
                                            autoComplete="new-password"
                                        />
                                        <button
                                            type="button"
                                            className="loginEye"
                                            onClick={() => setShowConfirm(v => !v)}
                                            aria-label={showConfirm ? "Hide password" : "Show password"}
                                        >
                                            {showConfirm ? "🙈" : "👁️"}
                                        </button>
                                    </div>
                                    {errors.confirm && <span className="loginError">{errors.confirm}</span>}
                                </div>
                            )}

                            {mode === "login" && (
                                <div className="loginForgot">
                                    <a href="#forgot">Forgot password?</a>
                                </div>
                            )}

                            <button type="submit" className="loginSubmitBtn">
                                {mode === "login" ? "Log In" : "Create Account"}
                            </button>
                        </form>
                    )}

                    {}
                    <div className="loginDivider">
                        <span>connected platforms</span>
                    </div>

                    {}
                    <div className="loginPlatforms">
                        {platforms.map(p => (
                            <span
                                key={p.label}
                                className="loginPlatformPill"
                                style={{ color: p.color, borderColor: p.color, background: `${p.color}14` }}
                            >
                                {p.label}
                            </span>
                        ))}
                    </div>

                    {}
                    <p className="loginSwitch">
                        {mode === "login"
                            ? <>Don't have an account? <button onClick={() => switchMode("signup")}>Sign Up</button></>
                            : <>Already have an account? <button onClick={() => switchMode("login")}>Log In</button></>
                        }
                    </p>

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Login;
