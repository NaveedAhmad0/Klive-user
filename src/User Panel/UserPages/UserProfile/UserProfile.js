import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./userprofile.module.css";
import Compress from "compress.js";

const UserProfile = () => {
	const compress = new Compress();
	//Get profile
	const [success, setSuccess] = useState(false);
	const [showData, setShowData] = useState({
		showemail: "please fill",
		showuserName: "please fill",
		showsurName: "please fill",
		showyearOfBirth: "please fill",
		showdayOfBirth: "please fill",
		showmonthOfBirth: "please fill",
		showpersonType: "please fill",
		showmobile: 0,
		showRNFcode: "please fill",
		showaddress: "please fill",
		showprovince: "please fill",
		showdistrict: "please fill",
		showsubDivision: "please fill",
		showpincode: "please fill",
		showinstagram: "please fill",
		showfacebook: "please fill",
		showlinkedin: "please fill",
		showwebsite: "please fill",
		showother: "please fill",
		showInitialShop: "please fill",
		showfirstName: "please fill",
		showbookbank: "please fill",
		showLogo: "please fill",
		showOtherDocument: "please fill",
		showidCard: "please fill",
		email: "",
		userName: "",
		surName: "",
		mobile: 0,
		address: "",
		province: "",
		district: "",
		subDivision: "",
		pincode: 0,
		personType: "null",
		InitialShop: "null",
		firstName: "null",
		yearOfBirth: "null",
		monthOfBirth: "null",
		dayOfBirth: "null",
		shopType: "null",
		creditCard: true,
		weChat: true,
		livePayment: true,
		mobileBanking: true,
		trueWallet: true,
		shopeePay: true,
		alone: true,
		website: "null",
		facebook: "null",
		linkedin: "null",
		instagram: "null",
		other: "null",
		company: "null",
		bank: "null",
		bankAccount: 0,
		rnfCode: "null",
		domestic: "null",
		inter: "null",
		rateQrCode: "null",
		rateBarCode: "null",
		copyOfId: "null",
		logo: "null",
		bankBook: "null",
		otherDocument: "null",
	});

	// const { email, mobile } = values;
	useEffect(() => {
		// const loginemail = localStorage.getItem("email");
		axios
			.get(
				`https://backend.klivepay.com/api/user/get-profile?email=${loginemail}`
			)
			.then((res) => {
				setShowData({
					showemail: res.data.user.email,
					showmobile: res.data.user.mobile,
					showuserName: res.data.user.userName,
					showfirstName: res.data.user.firstName,
					showaddress: res.data.user.address,
					showInitialShop: res.data.user.InitialShop,
					showyearOfBirth: res.data.user.yearOfBirth,
					showdayOfBirth: res.data.user.dayOfBirth,
					showdistrict: res.data.user.district,
					showsurName: res.data.user.surName,
					showprovince: res.data.user.province,
					showYearOfBirth: res.data.user.yearOfBirth,
					showbookbank: res.data.user.bankBook,
					showidCard: res.data.user.copyOfId,
					showLogo: res.data.user.logo,
					showOtherDocument: res.data.user.otherDocument,
					showmonthOfBirth: res.data.user.monthOfBirth,
					showDistrict: res.data.user.district,
					showsubDivision: res.data.user.subDivision,
					showpincode: res.data.user.pincode,
					showinstagram: res.data.user.instagram,
					showfacebook: res.data.user.facebook,
					showlinkedin: res.data.user.linkedin,
					showwebsite: res.data.user.website,
					showother: res.data.user.other,
					shopType: res.data.user.shopType,
					showbank: res.data.user.bank,
					showrateBARCode: res.data.user.rateBarCode,
					showrateQRCode: res.data.user.rateQrCode,
					showDomestic: res.data.user.domestic,
					showbankAccount: res.data.user.bankAccount,
					showcompany: res.data.user.company,
					showInter: res.data.user.inter,
					showRNFcode: res.data.user.rnfCode,
					personType: res.data.user.personType,
					creditCard: res.data.user.creditCard,
					weChat: res.data.user.weChat,
					livePayment: res.data.user.livePayment,
					mobileBanking: res.data.user.mobileBanking,
					trueWallet: res.data.user.trueWallet,
					shopeePay: res.data.user.shopeePay,
					alone: res.data.user.alone,
				});

				console.log("DATA IS ", res.data.user);
			});
	}, []);

	const loginemail = localStorage.getItem("email");

	async function onSubmit(event) {
		event.preventDefault();
		(function () {
			"use strict";
			window.addEventListener(
				"load",
				function () {
					// Fetch all the forms we want to apply custom Bootstrap validation styles to
					var forms = document.getElementsByClassName("needs-validation");
					// Loop over them and prevent submission
					var validation = Array.prototype.filter.call(forms, function (form) {
						form.addEventListener(
							"submit",
							function (event) {
								if (form.checkValidity() === false) {
									event.preventDefault();
									event.stopPropagation();
								}
								form.classList.add("was-validated");
							},
							false
						);
					});
				},
				false
			);
		})();

		try {
			const response = await axios.patch(
				`https://backend.klivepay.com/api/user/update-profile?email=${loginemail}`,
				JSON.stringify({
					userName: showData.showuserName,
					personType: showData.personType,
					InitialShop: showData.showInitialShop,
					firstName: showData.showfirstName,
					surName: showData.showsurName,
					yearOfBirth: showData.showyearOfBirth,
					monthOfBirth: showData.showmonthOfBirth,
					dayOfBirth: showData.showdayOfBirth,
					mobile: parseInt(showData.showmobile),
					address: showData.showaddress,
					province: showData.showprovince,
					district: showData.showdistrict,
					subDivision: showData.showsubDivision,
					pincode: parseInt(showData.showpincode),
					shopType: showData.shopType,
					creditCard: showData.creditCard,

					copyOfId: showData.showidCard,
					logo: showData.showLogo,
					bankBook: showData.showbookbank,
					otherDocument: showData.showOtherDocument,
					weChat: showData.weChat,
					livePayment: showData.livePayment,
					mobileBanking: showData.mobileBanking,
					trueWallet: showData.trueWallet,
					shopeePay: showData.shopeePay,
					alone: showData.alone,
					website: showData.showwebsite,
					facebook: showData.showfacebook,
					linkedin: showData.showlinkedin,
					instagram: showData.showinstagram,
					other: showData.showother,
					company: showData.showcompany,
					bank: showData.showbank,
					bankAccount: parseInt(showData.showbankAccount),
					rnfCode: showData.showRNFcode,
					domestic: showData.showDomestic,
					inter: showData.showInter,
					rateQrCode: showData.showrateQRCode,
					rateBarCode: showData.showrateBARCode,
				}),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);
			setSuccess(true);

			console.log(JSON.stringify(response?.data));
			// setSuccess(true);
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		if (success) {
			alert("Profile changed Succesfully!");
		}
	}, [success]);
	console.log(showData.shopType);
	return (
		<div className="col-12 grid-margin">
			<h4 className="card-title">user Personal Information</h4>

			<div className="card">
				<div className={`card-body ${styles.usercardbody}`}>
					<h4 className={`text-center ${styles.userHeading}`}>Profile</h4>
					<div className="row mt-5">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form className="needs-validation" novalidate>
								<div className="form-group">
									<label className={styles.userLabel}>merchant ID</label>
									<input
										type="email"
										disabled
										className={`form-control ${styles.userInputs}`}
										placeholder={"123456"}
									/>
								</div>
								<div className="form-group">
									<label for="validationDefault01" className={styles.userLabel}>
										merchant name
									</label>
									<input
										type="text"
										name="showuserName"
										onChange={(e) => {
											setShowData({
												...showData,
												showuserName: e.target.value,
											});
										}}
										id="validationCustom01"
										required
										value={showData.showuserName}
										className={`form-control ${styles.userInputs}`}
										placeholder="name"
									/>
									<div class="valid-feedback">Looks good!</div>
								</div>
							</form>
						</div>

						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>
										{" "}
										merchant name english
									</label>
									<input
										type="text"
										disabled
										className={`form-control ${styles.userInputs}`}
										placeholder="merchant name english"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>Email address</label>
									<input
										type="email"
										className={`form-control ${styles.userInputs}`}
										onChange={(e) => {
											setShowData({
												...showData,
												showemail: e.target.value,
											});
										}}
										value={showData.showemail}
									/>
								</div>
							</form>
						</div>
					</div>

					<label className={styles.userLabel}> person type</label>
					<div style={{ display: "flex" }}>
						<div class="form-check form-check-inline">
							<input
								type="radio"
								name="individual"
								onChange={(e) => {
									if (e.target.checked === true) {
										setShowData({
											...showData,
											personType: "individual",
										});
									}
								}}
								checked={showData.personType === "individual" ? true : false}
								class="form-check-input"
								value="individual"
							/>
							<label className={styles.userLabel}>individual</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="person"
								onChange={(e) => {
									if (e.target.checked === true) {
										setShowData({
											...showData,
											personType: "corporate",
										});
									}
								}}
								checked={showData.personType === "corporate" ? true : false}
								value="corporate"
							/>
							<label className={styles.userLabel}>corporate</label>
						</div>
					</div>
					<div class="form-group">
						<label className={styles.userLabel}>
							Intial shop(up to 10 characters)
						</label>
						<input
							type="email"
							name="InitialShop"
							onChange={(e) => {
								setShowData({
									...showData,
									showInitialShop: e.target.value,
								});
							}}
							value={showData.showInitialShop}
							className={`form-control ${styles.userInputs}`}
							// placeholder={showInitialShop}
						/>
					</div>

					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="form-group">
								<label className={styles.userLabel}>first name</label>
								<input
									type="year"
									name="showfirstName"
									onChange={(e) => {
										setShowData({
											...showData,
											showfirstName: e.target.value,
										});
									}}
									value={showData.showfirstName}
									className={`form-control ${styles.userInputs}`}
									// placeholder={showfirstName}
								/>
							</div>
						</div>

						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="form-group">
								<label className={styles.userLabel}>sur name</label>
								<input
									type="text"
									onChange={(e) => {
										setShowData({
											...showData,
											showsurName: e.target.value,
										});
									}}
									value={showData.showsurName}
									className={`form-control ${styles.userInputs}`}
									// placeholder={showsurName}
								/>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="form-group">
								<label className={styles.userLabel}>year of birth</label>
								<input
									type="year"
									name="yearOfBirth"
									onChange={(e) => {
										setShowData({
											...showData,
											showyearOfBirth: e.target.value,
										});
									}}
									value={showData.showyearOfBirth}
									className={`form-control ${styles.userInputs}`}
									// placeholder={showyearOfBirth}
								/>
							</div>
						</div>

						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="form-group">
								<label className={styles.userLabel}>month of birth</label>
								<input
									type="month"
									name="monthOfBirth"
									onChange={(e) => {
										setShowData({
											...showData,
											showmonthOfBirth: e.target.value,
										});
									}}
									value={showData.showmonthOfBirth}
									className={`form-control ${styles.userInputs}`}
									// placeholder={showmonthOfBirth}
								/>
							</div>
						</div>

						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="form-group">
								<label className={styles.userLabel}>day of birth</label>
								<input
									type="day"
									name="dayOfBirth"
									onChange={(e) => {
										setShowData({
											...showData,
											showdayOfBirth: e.target.value,
										});
									}}
									value={showData.showdayOfBirth}
									className={`form-control ${styles.userInputs}`}
									// placeholder={showdayOfBirth}
								/>
							</div>
						</div>
					</div>

					<div class="form-group">
						<label className={styles.userLabel}>contact number</label>
						<input
							type="number"
							onChange={(e) => {
								setShowData({
									...showData,
									showmobile: parseInt(e.target.value),
								});
							}}
							value={showData.showmobile}
							className={`form-control ${styles.userInputs}`}
							// placeholder={showmobile}
						/>
					</div>

					<div class="form-group">
						<label className={styles.userLabel}>address</label>
						<input
							type="text"
							onChange={(e) => {
								setShowData({
									...showData,
									showaddress: e.target.value,
								});
							}}
							value={showData.showaddress}
							className={`form-control ${styles.userInputs}`}
							// placeholder={showaddress}
						/>
					</div>

					<div className="row mt-5">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>provience</label>
									<input
										type="email"
										onChange={(e) => {
											setShowData({
												...showData,
												showprovince: e.target.value,
											});
										}}
										value={showData.showprovince}
										className={`form-control ${styles.userInputs}`}
										// placeholder={showprovince}
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>sub division</label>
									<input
										type="text"
										onChange={(e) => {
											setShowData({
												...showData,
												showsubDivision: e.target.value,
											});
										}}
										value={showData.showsubDivision}
										className={`form-control ${styles.userInputs}`}
										// placeholder={showsubDivision}
									/>
								</div>
							</form>
						</div>

						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>district</label>
									<input
										type="text"
										onChange={(e) => {
											setShowData({
												...showData,
												showdistrict: e.target.value,
											});
										}}
										value={showData.showdistrict}
										className={`form-control ${styles.userInputs}`}
										// placeholder={showdistrict}
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>pincode</label>
									<input
										type="number"
										onChange={(e) => {
											setShowData({
												...showData,
												showpincode: e.target.value,
											});
										}}
										value={showData.showpincode}
										className={`form-control ${styles.userInputs}`}
										placeholder="123456"
									/>
								</div>
							</form>
						</div>
					</div>

					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<label className={styles.userLabel}> shop type</label>
							<div style={{ display: "flex" }}>
								<div className={`form-check form-check-inline`}>
									<input
										className="form-check-input"
										type="radio"
										name="shop"
										//value="social"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													shopType: "social",
												});
											}
										}}
										checked={showData.shopType === "social" ? true : false}
									/>
									<label className={styles.userLabel}>social</label>
								</div>
								<div class="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													shopType: "website",
												});
											}
										}}
										checked={showData.shopType === "website"}
										name="shop"
										//value="website"
									/>
									<label className={styles.userLabel}>website</label>
								</div>
							</div>

							<label className={styles.userLabel}>live payment</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="livepayment"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													livePayment: true,
												});
											}
										}}
										defaultChecked={showData.livePayment === false}
										value="yes"
										checked={showData.livePayment === true ? true : false}
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="livepayment"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													livePayment: false,
												});
											}
										}}
										defaultChecked={showData.livePayment === false}
										value="no"
										checked={showData.livePayment === false ? true : false}
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>

							<label className={styles.userLabel}>shopee pay</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													shopeePay: true,
												});
											}
										}}
										defaultChecked={showData.shopeePay === false}
										name="shopeepay"
										value="yes"
										checked={showData.shopeePay === true ? true : false}
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="shopeepay"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													shopeePay: false,
												});
											}
										}}
										defaultChecked={showData.shopeePay === false}
										value="no"
										checked={showData.shopeePay === false ? true : false}
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<label className={styles.userLabel}>credit card</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													creditCard: true,
												});
											}
										}}
										name="creditcard"
										value={showData.creditCard}
										defaultChecked={showData.creditCard === false}
										checked={showData.creditCard === true ? true : false}
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div class="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										onChange={(e) => {
											if (e.target.checked === false) {
												setShowData({
													...showData,
													creditCard: false,
												});
											}
										}}
										name="creditcard"
										value="no"
										defaultChecked={showData.creditCard === false}
										checked={showData.creditCard === false ? true : false}
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>

							<label className={styles.userLabel}>mobile banking</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													mobileBanking: true,
												});
											}
										}}
										name="mbank"
										value="yes"
										defaultChecked={showData.mobileBanking === false}
										checked={showData.mobileBanking === true ? true : false}
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													mobileBanking: false,
												});
											}
										}}
										defaultChecked={showData.mobileBanking === false}
										name="mbank"
										value="no"
										checked={showData.mobileBanking === false ? true : false}
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>

							<label className={styles.userLabel}>alone</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													alone: true,
												});
											}
										}}
										defaultChecked={showData.alone === false}
										name="alone"
										checked={showData.alone === true ? true : false}
										value="yes"
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="alone"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													alone: false,
												});
											}
										}}
										defaultChecked={showData.alone === false}
										checked={showData.alone === false ? true : false}
										value="no"
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<label className={styles.userLabel}>we chat payment</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													weChat: true,
												});
											}
										}}
										defaultChecked={showData.weChat === false}
										name="wechat"
										checked={showData.weChat === true ? true : false}
										value="yes"
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="wechat"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													weChat: false,
												});
											}
										}}
										defaultChecked={showData.weChat === false}
										checked={showData.weChat === false ? true : false}
										value="no"
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>

							<label className={styles.userLabel}>true wallet</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="twallet"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													trueWallet: true,
												});
											}
										}}
										defaultChecked={showData.trueWallet === false}
										checked={showData.trueWallet === true ? true : false}
										value="yes"
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="twallet"
										onChange={(e) => {
											if (e.target.checked === true) {
												setShowData({
													...showData,
													trueWallet: false,
												});
											}
										}}
										defaultChecked={showData.trueWallet === false}
										value="no"
										checked={showData.trueWallet === false ? true : false}
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>
						</div>
					</div>

					<div className="row mt-5">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>web site</label>
									<input
										type="text"
										name="website"
										onChange={(e) => {
											setShowData({
												...showData,
												showwebsite: e.target.value,
											});
										}}
										value={showData.showwebsite}
										className={`form-control ${styles.userInputs}`}
										// placeholder={showwebsite}
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>linked in</label>
									<input
										type="text"
										name="linkedin"
										onChange={(e) => {
											setShowData({
												...showData,
												showlinkedin: e.target.value,
											});
										}}
										value={showData.showlinkedin}
										className={`form-control ${styles.userInputs}`}
										// placeholder={showlinkedin}
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>other</label>
									<input
										type="text"
										name="other"
										onChange={(e) => {
											setShowData({
												...showData,
												showother: e.target.value,
											});
										}}
										value={showData.showother}
										className={`form-control ${styles.userInputs}`}
										// placeholder={showother}
									/>
								</div>
							</form>
						</div>

						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>facebook</label>
									<input
										type="text"
										name="facebook"
										onChange={(e) => {
											setShowData({
												...showData,
												showfacebook: e.target.value,
											});
										}}
										value={showData.showfacebook}
										className={`form-control ${styles.userInputs}`}
										// placeholder={showfacebook}
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>instagram</label>
									<input
										type="text"
										name="instagram"
										onChange={(e) => {
											setShowData({
												...showData,
												showinstagram: e.target.value,
											});
										}}
										value={showData.showinstagram}
										className={`form-control ${styles.userInputs}`}
										// placeholder={showinstagram}
									/>
								</div>
							</form>
						</div>
					</div>

					<div className="row mt-5">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>
										copy of id card (Up to 5mb)
									</label>
									<input
										type="file"
										onChange={(e) => {
											const files = [...e.target.files];
											compress
												.compress(files, {
													size: 1,
													quality: 0.4,
													maxWidth: 500,
													maxHeight: 500,
													resize: true,
													rotate: false,
												})
												.then((data) => {
													showData.showidCard = data[0].prefix + data[0].data;
												});
										}}
										className={`form-control ${styles.userInputs}`}
										placeholder="file"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>book bank</label>
									<input
										type="file"
										onChange={(e) => {
											const files = [...e.target.files];
											compress
												.compress(files, {
													size: 1,
													quality: 0.4,
													maxWidth: 500,
													maxHeight: 500,
													resize: true,
													rotate: false,
												})
												.then((data) => {
													showData.showbookbank = data[0].prefix + data[0].data;
												});
										}}
										className={`form-control ${styles.userInputs}`}
										placeholder="file"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>company</label>
									<input
										type="text"
										onChange={(e) => {
											setShowData({
												...showData,
												showcompany: e.target.value,
											});
										}}
										value={showData.showcompany}
										className={`form-control ${styles.userInputs}`}
										placeholder="company"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>bank account</label>
									<input
										type="text"
										onChange={(e) => {
											setShowData({
												...showData,
												showbankAccount: e.target.value,
											});
										}}
										value={showData.showbankAccount}
										className={`form-control ${styles.userInputs}`}
										placeholder="bank account"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>domestic</label>
									<input
										type="text"
										onChange={(e) => {
											setShowData({
												...showData,
												showDomestic: e.target.value,
											});
										}}
										value={showData.showDomestic}
										className={`form-control ${styles.userInputs}`}
										placeholder="Domestic"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>rate of QR code</label>
									<input
										type="text"
										onChange={(e) => {
											setShowData({
												...showData,
												showrateQRCode: e.target.value,
											});
										}}
										value={showData.showrateQRCode}
										className={`form-control ${styles.userInputs}`}
										placeholder="QR code"
									/>
								</div>
							</form>
						</div>

						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>logo</label>
									<input
										type="file"
										onChange={(e) => {
											const files = [...e.target.files];
											compress
												.compress(files, {
													size: 1,
													quality: 0.4,
													maxWidth: 500,
													maxHeight: 500,
													resize: true,
													rotate: false,
												})
												.then((data) => {
													showData.showLogo = data[0].prefix + data[0].data;
												});
										}}
										// value={showData.showLogo}
										className={`form-control ${styles.userInputs}`}
										placeholder="file"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>other document</label>
									<input
										type="file"
										onChange={(e) => {
											const files = [...e.target.files];
											compress
												.compress(files, {
													size: 1,
													quality: 0.4,
													maxWidth: 500,
													maxHeight: 500,
													resize: true,
													rotate: false,
												})
												.then((data) => {
													showData.showOtherDocument =
														data[0].prefix + data[0].data;
												});
										}}
										// value={showData.showOtherDocument}
										className={`form-control ${styles.userInputs}`}
										placeholder="file"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>Bank</label>
									<input
										type="text"
										onChange={(e) => {
											setShowData({
												...showData,
												showbank: e.target.value,
											});
										}}
										value={showData.showbank}
										className={`form-control ${styles.userInputs}`}
										placeholder="bank"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>rnf code</label>
									<input
										type="text"
										onChange={(e) => {
											setShowData({
												...showData,
												showRNFcode: e.target.value,
											});
										}}
										value={showData.showRNFcode}
										className={`form-control ${styles.userInputs}`}
										placeholder="Rnf Code"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>inter</label>
									<input
										type="text"
										onChange={(e) => {
											setShowData({
												...showData,
												showInter: e.target.value,
											});
										}}
										value={showData.showInter}
										className={`form-control ${styles.userInputs}`}
										placeholder="Inter"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>rate of bar code</label>
									<input
										type="text"
										onChange={(e) => {
											setShowData({
												...showData,
												showrateBARCode: e.target.value,
											});
										}}
										value={showData.showrateBARCode}
										className={`form-control ${styles.userInputs}`}
										placeholder="Bar code"
									/>
								</div>
							</form>
						</div>
					</div>
					{/* <button type="button" className={`btn ${styles.userBtn}`}>Finish</button> */}
					<button
						type="button"
						onClick={(event) => onSubmit(event)}
						className={`btn ${styles.userBtn}`}>
						Finish
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
