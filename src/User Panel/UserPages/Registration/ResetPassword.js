import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
	const [newPassword, setNewPassword] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [matchPassword, setMatchPassword] = useState("");
	const [success, setSuccess] = useState(false);

	const resetMail = localStorage.getItem("email");

	async function onSubmit(event) {
		event.preventDefault();

		try {
			const response = await axios.patch(
				`https://backend.klivepay.com/api/user/reset-password?email=${resetMail}`,
				JSON.stringify({ oldPassword, newPassword }),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			console.log("mail", oldPassword);

			console.log(JSON.stringify(response?.data));

			// const accessToken = response?.data?.accessToken;
			// localStorage.setItem("token", response?.data?.accessToken);
			setOldPassword("");
			setNewPassword("");
			setSuccess(true);
		} catch (err) {
			if (oldPassword !== newPassword) {
				console.log(err);
				console.log("Password dont match");
			}
			console.log(oldPassword);
		}
		console.log(success);
	}
	useEffect(() => {
		if (success) {
			alert("Password Changed Succesfully!");
		}
	}, [success]);
	useEffect(() => {
		if (newPassword !== matchPassword) {
			alert("Unmatched password");
		}
	}, []);
	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="col-lg-8 mx-auto">
						<div className="auth-form-light text-left py-5 px-4 px-sm-5">
							<h4>Reset Password</h4>
							<form className="pt-3">
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										id="exampleInputEmail1"
										onChange={(e) => setOldPassword(e.target.value)}
										value={oldPassword}
										placeholder="Old Password"
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										id="exampleInputEmail1"
										onChange={(e) => setNewPassword(e.target.value)}
										value={newPassword}
										placeholder="New password"
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										id="password"
										placeholder="Match Password"
										onChange={(e) => setMatchPassword(e.target.value)}
										value={matchPassword}
									/>
								</div>

								<div className="mt-3">
									<button
										href="/user/login"
										onClick={(event) => onSubmit(event)}
										className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
										Reset Password
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
