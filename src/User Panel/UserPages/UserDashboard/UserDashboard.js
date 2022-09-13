import React, { Component } from "react";
// import { Line, Doughnut, Bar, Radar } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import BarChart from "../../../app/charts/BarChart";
import PieChart from "../../../app/charts/PieChart";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "./userDashboard.css";

const { SearchBar } = Search;

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';
const columns = [
	{
		dataField: "id",
		text: "Order number",
		sort: true,
		classes: "deal-row",
		headerClasses: "deal-header",
	},
	{
		dataField: "code",
		text: "Voucher code",
		classes: "deal-row-2",

		headerClasses: "deal-header",
	},

	{
		dataField: "purchasedate",
		text: "Purchase date",
		classes: "deal-row",
		headerClasses: "deal-header",
	},
	{
		dataField: "status",
		text: "Status",
		classes: "deal-row",
		headerClasses: "deal-header",
	},
	{
		dataField: "branchredeem",
		text: "Branch redeemed",
		headerClasses: "deal-header",
	},
	{
		dataField: "redemptiondate",
		text: "Redemption date",
		headerClasses: "deal-header",
	},
];
const products = [
	{
		id: 1003,
		code: "5Q2H-MWXF-36HE",
		purchasedate: "Jul. 8, 2022",
		status: "used",
		branchredeem: "Glorietta - GLO101",
		redemptiondate: "Jul. 10, 2022 at 4:30pm",
	},

	{
		id: 1004,
		code: "5Q2H-MWXF-36HE",
		purchasedate: "Jul. 8, 2022",
		status: "used",
		branchredeem: "Glorietta - GLO101",
		redemptiondate: "Jul. 10, 2022 at 4:30pm",
	},
	{
		id: 1005,
		code: "5Q2H-MWXF-36HE",
		purchasedate: "Jul. 8, 2022",
		status: "used",
		branchredeem: "Glorietta - GLO101",
		redemptiondate: "Jul. 10, 2022 at 4:30pm",
	},
];

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

export class UserDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visitChartData: {},
			impressionChartData: {},
			conversionChartData: {},
			downloadChartData: {},
			salesStatisticsChartData: {},
			netProfitChartData: {},
			totaltransactionChartData: {},
			areaOptions: {
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					yAxes: [
						{
							display: false,
						},
					],
					xAxes: [
						{
							display: false,
						},
					],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0,
					},
					line: {
						tension: 0,
					},
				},
				stepsize: 100,
			},
			salesStaticsOptions: {
				responsive: true,
				animation: {
					animateScale: true,
					animateRotate: true,
				},
				elements: {
					point: {
						radius: 3,
					},
					line: {
						tension: 0,
					},
				},
				layout: {
					padding: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
					},
				},
				legend: false,
				scales: {
					xAxes: [
						{
							display: false,
							ticks: {
								display: false,
								beginAtZero: false,
							},
							gridLines: {
								drawBorder: false,
								color: "#f8f8f8",
								zeroLineColor: "#f8f8f8",
							},
						},
					],
					yAxes: [
						{
							ticks: {
								max: 200,
								min: 0,
								stepSize: 50,
								fontColor: "#8b9298",
								beginAtZero: false,
							},
							gridLines: {
								color: "#f8f8f8",
								zeroLineColor: "#f8f8f8",
								display: true,
								drawBorder: false,
							},
						},
					],
				},
			},
			netProfitOptions: {
				scale: {
					ticks: {
						beginAtZero: true,
						min: 0,
						max: 100,
						stepSize: 20,
						display: false,
					},
					pointLabels: {
						fontSize: 14,
						fontColor: "#6c757c",
						color: "#f3f3f3",
						zeroLineColor: "#f3f3f3",
					},
					angleLines: {
						color: "#f3f3f3",
						zeroLineColor: "#f3f3f3",
					},
					gridLines: {
						color: "#f3f3f3",
						zeroLineColor: "#f3f3f3",
					},
				},
				legend: false,
			},
			totaltransactionChartOptions: {
				responsive: true,
				animation: {
					animateScale: true,
					animateRotate: true,
				},
				elements: {
					point: {
						radius: 0,
					},
				},
				layout: {
					padding: {
						left: -10,
						right: 0,
						top: 0,
						bottom: -10,
					},
				},
				legend: false,
				scales: {
					xAxes: [
						{
							gridLines: {
								display: false,
								color: "#fff",
								zeroLineColor: "#fff",
							},
							ticks: {
								display: false,
								color: "#fff",
								zeroLineColor: "#fff",
							},
						},
					],
					yAxes: [
						{
							gridLines: {
								display: false,
								color: "#fff",
								zeroLineColor: "#fff",
							},
							ticks: {
								display: false,
								color: "#fff",
								zeroLineColor: "#fff",
							},
						},
					],
				},
			},
			todos: [
				{
					id: 1,
					task: "Pick up kids from school",
					isCompleted: false,
				},
				{
					id: 2,
					task: "Prepare for presentation",
					isCompleted: false,
				},
				{
					id: 3,
					task: "Print Statements",
					isCompleted: false,
				},
				{
					id: 4,
					task: "Create invoice",
					isCompleted: false,
				},
				{
					id: 5,
					task: "Call John",
					isCompleted: false,
				},
			],
			inputValue: "",
			active: "",
		};
	}
	toggleProBanner() {
		document.querySelector(".proBanner").classList.toggle("hide");
	}
	render() {
		return (
			<div>
				<div className="row page-title-header">
					<div className="col-12">
						<div className="page-header">
							<div className="col" style={{ textAlign: "right" }}>
								<div className="dropdown-toggle">Today</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="row">
					<div className="col-md-12 grid-margin">
						<div className="card">
							<div className="card-body">
								<div className="row">
									<div className="col-xl-3 col-lg-3 col-sm-3 grid-margin-xl-0 grid-margin">
										<div className="d-flex newboxcss">
											<div className="wrapper my-auto ml-auto ml-lg-4 mr-1">
												<svg
													stroke="currentColor"
													fill="currentColor"
													strokeWidth="0"
													viewBox="0 0 16 16"
													height="2em"
													width="2em"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path>
												</svg>
											</div>
											<div className="wrapper">
												<h4 className="mb-0 font-weight-medium text-primary">
													Main Account
												</h4>
												<h3 className="mb-0 font-weight-semibold">32,451</h3>
												<p className="mb-0 text-muted">+14.00(+0.50%)</p>
											</div>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin ">
										<div className="d-flex newboxcss2 shadow-lg">
											<div className="wrapper">
												<h3 className="mb-0 font-weight-semibold">15,2336</h3>
												<h5 className="mb-0 font-weight-medium text-primary">
													Impressions
												</h5>
												<p className="mb-0 text-muted">+138.97(+0.54%)</p>
											</div>
											<div className="wrapper my-auto ml-auto ml-lg-4">
												<Line
													ref="chart"
													data={this.state.impressionChartData}
													options={this.state.areaOptions}
													datasetKeyProvider={this.state.datasetKeyProvider}
													height={50}
													width={100}
													id="imoressionChart"
												/>
											</div>
										</div>
									</div>
 */}

				{/* <div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
										<div className="d-flex newboxcss2 shadow-lg">
											<div className="wrapper">
												<h3 className="mb-0 font-weight-semibold">7,688</h3>
												<h5 className="mb-0 font-weight-medium text-primary">
													Conversion
												</h5>
												<p className="mb-0 text-muted">+57.62(+0.76%)</p>
											</div>
											<div className="wrapper my-auto ml-auto ml-lg-4">
												<Line
													ref="chart"
													data={this.state.conversionChartData}
													options={this.state.areaOptions}
													datasetKeyProvider={this.state.datasetKeyProvider}
													height={50}
													width={100}
													id="conversionChart"
												/>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
										<div className="d-flex newboxcss2 shadow-lg">
											<div className="wrapper">
												<h3 className="mb-0 font-weight-semibold">1,553</h3>
												<h5 className="mb-0 font-weight-medium text-primary">
													Downloads
												</h5>
												<p className="mb-0 text-muted">+138.97(+0.54%)</p>
											</div>
											<div className="wrapper my-auto ml-auto ml-lg-4">
												<Line
													ref="chart"
													data={this.state.downloadChartData}
													options={this.state.areaOptions}
													datasetKeyProvider={this.state.datasetKeyProvider}
													height={50}
													width={100}
													id="downloadChart"
												/>
											</div>
										</div>
									</div> */}

				{/* </div>
							</div>
						</div>
					</div>
				</div> */}
				{/* ........................... */}
				<div className="row">
					<div className="col-md-3">
						<div className="card text-center">
							<div
								className="card-header text-white"
								style={{ backgroundColor: "#401AAB" }}>
								<h5>
									$259.08
									<br />
									Trans Total
								</h5>
							</div>
							<div className="card-footer bg-white">
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
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card text-center">
							<div
								className="card-header text-white"
								style={{ backgroundColor: "#65AC23" }}>
								<h5>
									$259.08
									<br />
									Trans Amount
								</h5>
							</div>
							<div className="card-footer bg-white">
								<div className="row">
									<div className="col">
										<p>Success</p>
										<p>Fail</p>
										<p>Trans AVG</p>
									</div>
									<div className="col">
										<p>0.00</p>
										<p>0.00</p>
										<p>0.00</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card text-center">
							<div
								className="card-header text-white"
								style={{ backgroundColor: "#AB4627" }}>
								<h5>
									$259.08
									<br />
									Customer Total
								</h5>
							</div>
							<div className="card-footer bg-white">
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
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card text-center">
							<div
								className="card-header text-white"
								style={{ backgroundColor: "#AB1A8B" }}>
								<h5>
									$259.08
									<br />
									Transaction
								</h5>
							</div>
							<div className="card-footer bg-white">
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
							</div>
						</div>
					</div>
				</div>
				<br />

				<div className="card" style={{ width: "75.rem" }}>
					<div className="card-body cardbody123">
						<div className="row">
							<div className="col">
								<h6>Top 5 Transaction Channel</h6>
							</div>
							<div className="col" style={{ textAlign: "right" }}>
								<div className="dropdown-toggle">Today</div>
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
				</div>
				<br />
				<div>
					<div className="row">
						<BarChart />
					</div>
				</div>
				<br></br>
				<div className="card" style={{ width: "75.rem", height: "15rem" }}>
					<div className="card-body cardbody123">
						<h6>Latest Transaction</h6>
						<br />
						<div class="card">
							<table class="table">
								<thead>
									<th scope="col">Trans Id</th>
									<th scope="col">Trans Date</th>
									<th scope="col">Merchant</th>
									<th scope="col">Customer</th>
									<th scope="col">Order No</th>
									<th scope="col">Payment Channel</th>
									<th scope="col">Payment Date</th>
									<th scope="col">Amount</th>
									<th scope="col">Fee</th>
								</thead>
							</table>
						</div>
						<div className="footer">
							<h6>No Data Available</h6>
						</div>
					</div>
				</div>

				<div style={{ marginTop: "2rem" }}>
					<div className="row">
						<PieChart />
					</div>
				</div>

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
}
export default UserDashboard;
