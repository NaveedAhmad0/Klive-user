import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Toast from "react-bootstrap/Toast";
// import ToastContainer from "react-bootstrap/ToastContainer";

function UserLogin() {
	const [loading, setLoading] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	const [show, setShow] = useState(false);

	// const logindetails = { email, password };

	// const navigate = Redirect();
	function handleChange(event) {
		setEmail(event.target.value);
	}
	function handleChangeone(event) {
		setPassword(event.target.value);
	}
	async function onSubmit(event) {
		event.preventDefault();
		console.log(email, password);
		try {
			const response = await axios.post(
				`https://backend.klivepay.com/api/user/login`,
				JSON.stringify({ email, password }),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			console.log(JSON.stringify(response?.data));

			const accessToken = response?.data?.accessToken;
			localStorage.setItem("token", accessToken);
			localStorage.setItem("email", email);
			setEmail("");
			setPassword("");
			setSuccess(true);
			setLoading(false);
			setTimeout(() => {
				setLoading(false);
			}, 3000);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 400) {
				setErrMsg("Invalid Credentialials");
				setSuccess(false);
			} else {
				setErrMsg("Login failed");
			}
			console.log(err);
		}
		console.log(success);
	}
	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="col-lg-6 mx-auto">
						<div className="auth-form-light text-left py-5 px-4 px-sm-5 ">
							<div className="brand-logo">
								{/* <img src={require("../../assets/images/logo.svg")} alt="logo" /> */}
								<h3
									className={!errMsg ? "errMsg" : "text-danger"}
									style={{ zIndex: 9999, position: "absolute" }}>
									{errMsg}
								</h3>
							</div>
							<h4 className="text-primary mt-2">KlivePay- User Login</h4>
							<Form className="pt-3">
								<Form.Group className="d-flex search-field">
									<Form.Control
										type="email"
										placeholder="Email"
										onChange={(event) => handleChange(event)}
										value={email}
										size="lg"
										className="h-auto"
									/>
								</Form.Group>
								<Form.Group className=" search-field">
									<Form.Control
										type={show ? "text" : "password"}
										placeholder="Password"
										onChange={(event) => handleChangeone(event)}
										value={password}
										size="lg"
										className="h-auto"
									/>

									<FontAwesomeIcon
										style={{
											position: "absolute",
											zIndex: "70",
											right: "70px",
											top: "205px",
											// left: "225px",
											// bottom: "50px",
										}}
										onClick={() => {
											setShow(!show);
										}}
										icon={show ? faEye : faEyeSlash}
									/>
								</Form.Group>
								<Link
									to="/user/registration/forgotPassword"
									className="auth-link text-black">
									Forgot password?
								</Link>
								<div className="mt-3">
									{!success ? (
										<button
											onClick={(event) => onSubmit(event)}
											className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
											SIGN IN
										</button>
									) : (
										<Redirect to="/user/UserDashboard" />
									)}
								</div>

								<div className="text-center mt-4 font-weight-light">
									Don't have an account?{" "}
									<Link to="/user/registration" className="text-primary">
										Sign Up
									</Link>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserLogin;
