import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
	const [newPassword, setNewPassword] = useState("");
	const [oldpassword, setOldPassword] = useState("");
	const [matchPassword, setMatchPassword] = useState("");
	const [success, setSuccess] = useState(false);

	const resetMail = localStorage.getItem("email");

	async function onSubmit(event) {
		event.preventDefault();
		console.log(oldpassword, newPassword);

		try {
			const response = await axios.patch(
				`https://backend.klivepay.com/api/user/reset-password?email=${resetMail}.com&oldpassword=${oldpassword}`,
				JSON.stringify({ newPassword }),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			console.log("mail", oldpassword);

			console.log(JSON.stringify(response?.data));

			// const accessToken = response?.data?.accessToken;
			// localStorage.setItem("token", response?.data?.accessToken);
			setOldPassword("");
			setNewPassword("");
			setSuccess(true);
		} catch (err) {
			if (oldpassword !== newPassword) {
				console.log(err);
				console.log("Password dont match");
			}
			console.log(oldpassword);
		}
		console.log(success);
	}
	useEffect(() => {
		if (success) {
			alert("You have registered Succesfully!");
		}
	}, [success]);
	useEffect(() => {
		if (newPassword !== matchPassword) {
			alert("Unmatched");
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
										value={oldpassword}
										placeholder="Old Password"
									/>
								</div>
								<div className="form-group">
									<input
										type="email"
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
										placeholder="Old Password"
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
