import axios from "axios";
import React, { useEffect, useState } from "react";
// import AdminTable from "../../Admin-Panel-Components/Admin-Panel-Table/AdminTable";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
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
				QR: (
					<img
						src={`data:image/png;base64,${sample[i].t_qr_image}`}
						alt="QR"
						width={190}
						style={{ borderRadius: "0" }}
					/>
				),
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
				<button
					alt="issueimageload"
					className="cursor-pointer btn btn-success"
					// src={Edit}
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						history.push({
							pathname: "/user/user-merchant-datails",
							state: { invoiceId: row.id, status: row.status },
						});
					}}>
					view
				</button>
			</h5>
		);
	};

	return (
		<div>
			<h2 className="text-primary bw-bold">Users</h2>
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
																onChange={(e) => setSelectType(e.target.value)}>
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
	);
};

export default DepositsToMerchant;
