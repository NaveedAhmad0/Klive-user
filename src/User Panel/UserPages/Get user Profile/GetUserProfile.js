import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const GetUserProfile = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [surName, setSurName] = useState("");
	const [mobile, setMobile] = useState("");
	const [address, setAddress] = useState("");
	const [province, setProvince] = useState("");
	const [district, setDistrict] = useState("");
	const [subDivision, setSubDivision] = useState("");
	const [pincode, setPincode] = useState("");

	// const { email, mobile } = values;

	useEffect(() => {
		axios
			.get(
				"https://backend.klivepay.com/api/user/get-profile?email=user%40mail.com"
			)

			.then((res) => {
				setEmail(res.data.user.email);
				setMobile(res.data.user.mobile);
				setName(res.data.user.name);
				setSurName(res.data.user.surName);
				setAddress(res.data.user.address);
				setProvince(res.data.user.province);
				setDistrict(res.data.user.district);
				setSubDivision(res.data.user.subDivision);
				setPincode(res.data.user.pincode);
				console.log("DATA IS ", res.data.user);
			});
	}, []);

	return (
		<div className="col-12 grid-margin">
			<h4 className="card-title">Personal Information</h4>

			<div className="card">
				<div className="row flex-column mt-5 mx-auto">
					<img
						className="img-lg mx-auto rounded-circle"
						src={require("../../../assets/images/faces/face8.jpg")}
						alt="Profile"
					/>
					<div className="mt-2 mx-auto">
						<p>
							Merchant Code: <span className="text-primary">M010303</span>
						</p>
						<p className="mx-auto">
							Email: <span className="text-primary">{email}</span>
						</p>
					</div>
				</div>
				<div className="card-body">
					<form className="form-sample">
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group className=" d-flex">
									<h5 htmlFor="exampleInputUsername1" className="text-primary">
										System Username :-
									</h5>
									<h6 className="ms-2">{name}</h6>
								</Form.Group>
							</div>
							{/* <div className="col-md-2"></div> */}
							<div className="col-md-5">
								<Form.Group className="d-flex">
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										SurName :-
									</h5>
									<h6 className="ms-2">{surName}</h6>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group className="row">
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Mobile :-
										<span className="text-black ms-1">{mobile}</span>
									</h5>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group className="row">
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Address :-
										<span className=" text-black ms-2">{address}</span>
									</h5>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5 ">
								<Form.Group>
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Province :-
										<span className="text-black ms-2">{province}</span>
									</h5>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group>
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										District :-
										<span className="text-black ms-2">{district}</span>
									</h5>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group>
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Sub-Division :-
										<span className="text-black ms-2">{subDivision}</span>
									</h5>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group>
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Zip Code :-
										<span className="text-black ms-2">{pincode}</span>
									</h5>
								</Form.Group>
							</div>
						</div>
						<div className="row ">
							<div className="mx-auto col-md-11">
								<Link to="/user/EditProfile" className="text-white">
									<button className="btn btn-success btn-lg btn-block rounded-pill">
										Edit profile
									</button>
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default GetUserProfile;
