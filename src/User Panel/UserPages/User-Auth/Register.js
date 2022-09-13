import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../../../backend";
import MerchantLogin from "./Login";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const MOBILE_REGEX = /^[0-9]{10}$/;

function Register() {
	const userRef = useRef();
	const errRef = useRef();

	const [name, setName] = useState("");
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [mobile, setMobile] = useState(0);
	const [validMobile, setValidMobile] = useState(false);
	const [mobileFocus, setMobileFocus] = useState(false);

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [password, setPassword] = useState("");
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		const result = USER_REGEX.test(name);
		console.log(result);
		console.log(name);
		setValidName(result);
	}, [name]);

	useEffect(() => {
		const result = EMAIL_REGEX.test(email);
		console.log(result);
		console.log(email);
		setValidEmail(result);
	}, [email]);

	useEffect(() => {
		const result = MOBILE_REGEX.test(mobile);
		console.log(result);
		console.log(mobile);
		setValidMobile(result);
	}, [mobile]);

	useEffect(() => {
		const result = PWD_REGEX.test(password);
		console.log(result);
		console.log(password);
		setValidPwd(result);
		const match = password === matchPwd;
		setValidMatch(match);
	}, [password, matchPwd]);

	useEffect(() => {
		setErrMsg("");
	}, [password, name, matchPwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if button enabled with JS hack
		const v1 = USER_REGEX.test(name);
		const v2 = PWD_REGEX.test(password);
		if (!v1 || !v2) {
			setErrMsg("Invalid Entry");
			return;
		}
		try {
			const response = await axios.post(
				"https://backend.klivepay.com/api/merchant/register",
				JSON.stringify({ name, mobile, email, password }),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true
				}
			);
			console.log(response?.data);
			// console.log(response?.accessToken);
			console.log(JSON.stringify(response));
			setSuccess(true);
			//clear state and controlled inputs
			//need value attrib on inputs for this
			setName("");
			setEmail("");
			setPassword("");
			setMatchPwd("");
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 409) {
				setErrMsg("Username Taken");
			} else {
				setErrMsg("Registration Failed");
			}
			errRef.current.focus();
		}
	};

	return (
		<>
			{success ? (
				<MerchantLogin />
			) : (
				<div>
					<div className="d-flex align-items-center auth px-0">
						<div className="row w-100 mx-0">
							<div className="col-lg-6 mx-auto">
								<div className="auth-form-light text-left py-5 px-4 px-sm-5">
									<div className="brand-logo">
										<img
											src={require("../../../assets/images/logo.svg")}
											alt="logo"
										/>
									</div>
									<p
										ref={errRef}
										className={errMsg ? "errmsg" : "offscreen"}
										aria-live="assertive">
										{errMsg}
									</p>
									<h4>New here??</h4>
									<h6 className="font-weight-light">
										Signing up is easy. It only takes a few steps
									</h6>
									<form className="pt-3">
										<div className="form-group">
											<input
												type="text"
												id="username"
												ref={userRef}
												autoComplete="off"
												onChange={(e) => setName(e.target.value)}
												value={name}
												required
												aria-invalid={validName ? "false" : "true"}
												aria-describedby="uidnote"
												onFocus={() => setUserFocus(true)}
												onBlur={() => setUserFocus(false)}
												placeholder="Username"
												className="form-control form-control-lg"
											/>
										</div>
										<div className="form-group">
											<input
												type="number"
												id="mobileNumber"
												onChange={(e) => setMobile(parseInt(e.target.value))}
												value={mobile}
												aria-invalid={validMobile ? "false" : "true"}
												required
												onFocus={() => setMobileFocus(true)}
												onBlur={() => setMobileFocus(false)}
												className="form-control form-control-lg"
												placeholder="mobile"
											/>
										</div>
										<div className="form-group">
											<input
												type="email"
												id="email"
												onChange={(e) => setEmail(e.target.value)}
												value={email}
												aria-invalid={validEmail ? "false" : "true"}
												required
												onFocus={() => setEmailFocus(true)}
												onBlur={() => setEmailFocus(false)}
												className="form-control form-control-lg"
												placeholder="Email"
											/>
										</div>
										<div className="form-group">
											<input
												type="password"
												id="password"
												onChange={(e) => setPassword(e.target.value)}
												value={password}
												required
												aria-invalid={validPwd ? "false" : "true"}
												aria-describedby="pwdnote"
												onFocus={() => setPwdFocus(true)}
												onBlur={() => setPwdFocus(false)}
												className="form-control form-control-lg"
												placeholder="Password"
											/>
										</div>
										<div className="form-group">
											<input
												type="password"
												id="Confirm-password"
												onChange={(e) => setMatchPwd(e.target.value)}
												value={matchPwd}
												required
												aria-invalid={validMatch ? "false" : "true"}
												aria-describedby="confirmnote"
												onFocus={() => setMatchFocus(true)}
												onBlur={() => setMatchFocus(false)}
												className="form-control form-control-lg"
												placeholder="Confirm Password"
											/>
										</div>
										<div className="mb-4">
											<div className="form-check">
												<label className="form-check-label text-muted">
													<input type="checkbox" className="form-check-input" />
													<i className="input-helper"></i>I agree to all Terms &
													Conditions
												</label>
											</div>
										</div>
										<div className="mt-3">
											<button
												// type="submit"
												href="/merchant/login"
												onClick={handleSubmit}
												disabled={
													!validName ||
													!validPwd ||
													!validMobile ||
													!validEmail ||
													!validMatch
														? true
														: false
												}
												className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
												{/* <Link to="/merchant/dashboard" className="text-white"> */}
												SIGN UP
												{/* </Link> */}
											</button>
										</div>
										<div className="text-center mt-4 font-weight-light">
											Already have an account?{" "}
											<Link to="/user-pages/login" className="text-primary">
												Login
											</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Register;
