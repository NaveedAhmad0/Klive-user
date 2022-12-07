import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [success, setSuccess] = useState(false);

	async function onSubmit(event) {
		event.preventDefault();
		console.log(email, newPassword);

		try {
			const response = await axios.patch(
				`https://backend.klivepay.com/api/user/forget-password?email=${email}`,
				JSON.stringify({ newPassword }),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			console.log("mail", email);

			console.log(JSON.stringify(response?.data));

			// const accessToken = response?.data?.accessToken;
			// localStorage.setItem("token", response?.data?.accessToken);
			setEmail("");
			setNewPassword("");
			setSuccess(true);
		} catch (err) {
			console.log(err);
			console.log(email);
		}
		console.log(success);
	}
	useEffect(() => {
		if (success) {
			alert("You have registered Succesfully!");
		}
	}, [success]);
	return (
		// <div className="col-12 grid-margin stretch-card">
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="col-lg-6 mx-auto">
						<div className="auth-form-light text-left py-5 px-4 px-sm-5">
							<h4>Forgot Password</h4>
							<form className="pt-3">
								<div className="form-group">
									<input
										type="email"
										className="form-control form-control-lg"
										id="exampleInputEmail1"
										onChange={(e) => setEmail(e.target.value)}
										value={email}
										placeholder="Email"
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										id="password"
										placeholder="New Password"
										onChange={(e) => setNewPassword(e.target.value)}
										value={newPassword}
									/>
								</div>
								<div className="form-group">
									<Link to="/user/login">
										<h5 className="text-primary">Login?</h5>
									</Link>
								</div>

								<div className="mt-3">
									<button
										href="/admin/user/Registration/UserLogin"
										onClick={(event) => onSubmit(event)}
										className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
										Forgot Password
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		// </div>
	);
};

export default UserForgotPassword;
