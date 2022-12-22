import React, { useState, useEffect } from "react";
// import { Line, Doughnut, Bar, Radar } from 'react-chartjs-2';
// import { Line } from "react-chartjs-2";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import BarChart from "../../../app/charts/BarChart";
// import PieChart from "../../../app/charts/PieChart";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "./userDashboard.css";
import axios from "axios";
import API from "../../../backend";

// const { SearchBar } = Search;

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

const options = {
	paginationSize: 4,
	pageStartIndex: 1,
	alwaysShowAllBtns: true, // Always show next and previous button
	withFirstAndLast: false, // Hide the going to First and Last page button
	hideSizePerPage: true, // Hide the sizePerPage dropdown always
	hidePageListOnlyOnePage: true, // Hide the pagination list when only one page

	showTotal: false,

	disablePageTitle: true,
};

function UserDashboard() {
	const [TotalPaid, setTotalPaid] = useState(0);

	const mail = localStorage.getItem("email");
	const [ittems, setItems] = useState([]);
	const [expired, setExpired] = useState([]);
	const [pending, setPending] = useState([]);
	const [paid, setPaid] = useState([]);
	const [sample, setsample] = useState([]);
	const [selectType, setSelectType] = useState("");

	const loginMail = localStorage.getItem("email");
	console.log("items is", sample);
	useEffect(() => {
		if (selectType === "pending") {
			setsample(pending);
		}
		if (selectType === "expired") {
			setsample(expired);
		} else if (selectType === "paid") {
			setsample(paid);
		} else {
			setsample(pending);
		}
		const sample2 = [];
		// console.log("resp", response.data);
		for (let i = 0; i < sample.length; i += 1) {
			sample2.push({
				id: sample[i].t_id,
				QR: sample[i].t_totalamount,
				email: sample[i].t_bill_from,
				mobile: sample[i].t_mobile,
				// status: sample[i].t_status === true ? "Completed" : "Pending",
				status: (selectType ? selectType : "pending").toUpperCase(),
			});
		}
		setItems(sample2);
	}, [expired, paid, pending, sample, selectType]);
	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios
					.get(`${API}/user/ListOfInvoice?email=${loginMail}`)
					.then((response) => {
						setExpired(response.data.expired);
						setPaid(response.data.paid);
						setPending(response.data.pending);
					});
			} catch (error) {
				console.log(error);
			}
		};
		(async () => await getUserDetails())();
	}, []);

	const { SearchBar } = Search;

	const columns = [
		{
			dataField: "id",
			text: "No",
			sort: true,
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "QR",
			text: "Total Amount",
			classes: "deal-row-2",

			headerClasses: "deal-header",
		},

		{
			dataField: "email",
			text: "Merchant Email",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "mobile",
			text: "Mobile",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "status",
			text: "Status",
			style: {
				fontWeight: 600,
				color:
					selectType === "pending"
						? "orange"
						: selectType === "paid"
						? "green"
						: selectType === "expired"
						? "red"
						: "orange",
			},
			headerClasses: "deal-header",
		},
	];

	useEffect(() => {
		axios
			.get(
				`https://backend.klivepay.com/api/user/User_total_Amount?email=${mail}`
			)
			.then((res) => {
				console.log("RESPONSE ISS", res);
				if (res.data.code === 200) {
					setTotalPaid(res.data.TotalPaid);
				} else {
					alert("Something Went Wrong");
				}
			});
	}, []);

	return (
		<div>
			<div className="row page-title-header">
				<div className="col-12">
					<div className="page-header">
						{/* <div className="col" style={{ textAlign: "right" }}>
							<div className="dropdown-toggle">Today</div>
						</div> */}
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-3">
					<div className="card text-center">
						<div
							className="card-header text-white"
							style={{ backgroundColor: "#401AAB" }}>
							<h5>
								Transaction Total
								<br />$ {TotalPaid}
							</h5>
						</div>
						{/* <div className="card-footer bg-white">
							<div className="row">
								<div className="col">
									<p>Success</p>
									<p>Cancel</p>
									<p></p>
								</div>
								<div className="col">
									<p>0.00</p>
									<p>0.00</p>
									<p>&nbsp;</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
				<div className="col-md-3">
					<div className="card text-center">
						<div
							className="card-header text-white"
							style={{ backgroundColor: "#65AC23" }}>
							<h5>
								Transaction Amount
								<br />$ {TotalPaid}
							</h5>
						</div>
						{/* <div className="card-footer bg-white">
							<div className="row">
								<div className="col">
									<p>Success</p>
									<p>Failed</p>
									<p>Transaction AVG</p>
								</div>
								<div className="col">
									<p>0.00</p>
									<p>0.00</p>
									<p>0.00</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
				<div className="col-md-3">
					<div className="card text-center">
						<div
							className="card-header text-white"
							style={{ backgroundColor: "#AB4627" }}>
							<h5>
								Customer Total
								<br />$ {TotalPaid}
							</h5>
						</div>
						{/* <div className="card-footer bg-white">
							<div className="row">
								<div className="col">
									<p>Amount</p>
									<p>Customer</p>
									<p>Disc Amount</p>
								</div>
								<div className="col">
									<p>0.00</p>
									<p>0.00</p>
									<p>0.00</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
				<div className="col-md-3">
					<div className="card text-center">
						<div
							className="card-header text-white"
							style={{ backgroundColor: "#AB1A8B" }}>
							<h5>
								Transaction
								<br />$ {TotalPaid}
							</h5>
						</div>
						{/* <div className="card-footer bg-white">
							<div className="row">
								<div className="col align-items-left">
									<p>Trans Void</p>
									<p>Refund</p>
									<p></p>
								</div>
								<div className="col">
									<p>0.00</p>
									<p>0.00</p>
									<p>&nbsp;</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			<br />

			{/* <div className="card" style={{ width: "75.rem" }}>
				<div className="card-body cardbody123">
					<div className="row">
						<div className="col">
							<h6>Top 5 Transaction Channel</h6>
						</div>
						
					</div>
					<br />
					<div className="row">
						<div className="col-3">
							<div className="card mb-3">
								<div className="card-body cardbody123">
									<svg
										className="svg123"
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										fill="currentColor"
										class="bi bi-shield-fill-check"
										viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
										/>
									</svg>
									<h4 className="h4card">
										Internet banking
										<br />
										Lorem Ipsum
									</h4>
									<br />
									<br />
									<p className="card-text">
										Transfer:<span style={{ margin: "0 60px" }}>0.00</span>
									</p>
									<p className="card-text">
										Amount:<span style={{ margin: "0 60px" }}>0.00</span>
									</p>
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="card mb-3">
								<div className="card-body cardbody123">
									<svg
										className="svg123"
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										fill="currentColor"
										class="bi bi-shield-fill-check"
										viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
										/>
									</svg>
									<h4 className="h4card">
										Internet banking
										<br />
										Lorem Ipsum
									</h4>
									<br />
									<br />
									<p className="card-text">
										Transfer:<span style={{ margin: "0 58px" }}>0.00</span>
									</p>
									<p className="card-text">
										Amount:<span style={{ margin: "0 60px" }}>0.00</span>
									</p>
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="card mb-3">
								<div className="card-body cardbody123">
									<svg
										className="svg123"
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										fill="currentColor"
										class="bi bi-shield-fill-check"
										viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
										/>
									</svg>
									<h4 className="h4card">
										Internet banking
										<br />
										Lorem Ipsum
									</h4>
									<br />
									<br />
									<p className="card-text">
										Transfer:<span style={{ margin: "0 58px" }}>0.00</span>
									</p>
									<p className="card-text">
										Amount:<span style={{ margin: "0 60px" }}>0.00</span>
									</p>
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="card mb-3">
								<div className="card-body cardbody123">
									<svg
										className="svg123"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="currentColor"
										class="bi bi-shield-fill-check"
										viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
										/>
									</svg>
									<h4 className="h4card">
										Internet banking
										<br />
										Lorem Ipsum
									</h4>
									<br />
									<br />
									<p className="card-text">
										Transfer:<span style={{ margin: "0 58px" }}>0.00</span>
									</p>
									<p className="card-text">
										Amount:<span style={{ margin: "0 60px" }}>0.00</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			<br></br>

			<div>
				<h2 className="text-primary bw-bold">Transaction History</h2>
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-12 grid-margin">
								<div className="card">
									<div className="card-body">
										<div className="table-responsive">
											<ToolkitProvider
												keyField="id"
												data={ittems}
												columns={columns}
												search>
												{(props) => (
													<div>
														<div className="container d-flex justify-content-between">
															<SearchBar
																{...props.searchProps}
																className="custome-search-field"
																style={{ color: "white" }}
																delay={500}
																placeholder="Search..."
															/>
															<div style={{ width: "150px" }}>
																<select
																	style={{
																		height: "45px",
																		border: "1px solid lightgrey",
																	}}
																	className="form-select "
																	onChange={(e) =>
																		setSelectType(e.target.value)
																	}>
																	{/* <option>select</option> */}
																	<option value={"pending"}>Pending</option>
																	<option value={"expired"}>Expired </option>
																	<option value={"paid"}> Paid</option>
																</select>
															</div>
														</div>
														<hr />
														{ittems.length > 0 ? (
															<BootstrapTable
																{...props.baseProps}
																headerClasses={{ backgroundColor: "red" }}
																pagination={paginationFactory(options)}
															/>
														) : (
															<h4 className="text-danger text-center">
																No Invoices
															</h4>
														)}
													</div>
												)}
											</ToolkitProvider>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="row"></div>
					</div>
				</div>
			</div>

			<div>
				<div className="row">
					<BarChart TotalPaid={TotalPaid} />
				</div>
			</div>

			{/* <div style={{ marginTop: "2rem" }}>
				<div className="row">
					<PieChart />
				</div>
			</div> */}

			{/* <div className="row">
				<div className="col-md-12">
					<div className="page-header"> 
						<h4 className="pageUser-title">Transaction History</h4>
					</div>
					<div className="row">
						<div className="col-md-12 grid-margin">
							<div className="card">
								<div className="card-body">
									<div className="table-responsive">
										<ToolkitProvider
											keyField="id"
											data={products}
											columns={columns}
											search>
											{(props) => (
												<div>
													<h3>Input something at below input field:</h3>
													<SearchBar
														{...props.searchProps}
														className="custome-search-field"
														style={{ color: "white" }}
														delay={500}
														placeholder="Search Something!!!"
													/>
													<hr />
													<BootstrapTable
														{...props.baseProps}
														pagination={paginationFactory(options)}
													/>
												</div>
											)}
										</ToolkitProvider>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="row"></div>
				</div>
			</div> */}
		</div>
	);
}
export default UserDashboard;
