import axios from "axios";
import React, { useEffect, useState } from "react";
// import AdminTable from "../../Admin-Panel-Components/Admin-Panel-Table/AdminTable";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useHistory } from "react-router-dom";
import API from "../../../backend";

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

const DepositsToMerchant = () => {
	const history = useHistory();
	const [ittems, setItems] = useState([]);
	const loginMail = localStorage.getItem("email");
	console.log("items is", ittems);
	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios
					.get(`${API}/user/deposit-to-merchants?email=${loginMail}`)
					.then((response) => {
						const sample = [];

						for (let i = 0; i < response.data.length; i += 1) {
							sample.push({
								id: response.data[i].id,
								QR: (
									<img
										src={`data:image/png;base64,${response.data[i].qrImage}`}
										alt="QR"
										width={190}
										style={{ borderRadius: "0" }}
									/>
								),
								email: response.data[i].email,
								mobile: response.data[i].mobile,
								status: response.data[i].status,
								redemptiondate: response.data[i].email,
							});
							console.log("res", response.data[i]);
						}
						setItems(sample);

						// console.log(response.data[3].id);
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
			text: "QR Code",
			classes: "deal-row-2",

			headerClasses: "deal-header",
		},

		{
			dataField: "email",
			text: "Email",
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
			headerClasses: "deal-header",
		},
		{
			dataField: "view",
			isDummyField: true,
			text: "Edit role",
			headerClasses: "deal-header",
			formatter: (cellContent, row) => {
				return customFunction(cellContent, row);
			},
		},
	];
	const customFunction = (cellContent, row) => {
		return (
			<h5>
				{/* <Link to="/admin/getUserProfile"> */}
				<button
					alt="issueimageload"
					className="cursor-pointer btn btn-success"
					// src={Edit}
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						history.push({
							pathname: "/user/user-merchant-datails",
							state: { invoiceId: row.id },
						});
						// console.log(row.email);
					}}>
					view
				</button>
				{/* </Link> */}
			</h5>
		);
	};
	console.log("list of item", ittems);
	// list.map((list)=>{})

	return (
		<div>
			<h2 className="text-primary bw-bold">Users</h2>
			{/* {ittems.map((item) => (
				<AdminTable key={item.id} list={item} />
			))} */}
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
													{/* <h3>Inputt something at below input field:</h3> */}
													<SearchBar
														{...props.searchProps}
														className="custome-search-field"
														style={{ color: "white" }}
														delay={500}
														placeholder="Search..."
													/>
													<hr />
													<BootstrapTable
														{...props.baseProps}
														headerClasses={{ backgroundColor: "red" }}
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
			</div>
		</div>
	);
};

export default DepositsToMerchant;
