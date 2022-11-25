import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import API from "../../../backend";

function UserMerchantDetails() {
	const location = useLocation();
	const [showData, setShowData] = useState([
		{
			email: "",
			invoiceRefId: "",
			mobile: "",
			items: {},
			billTo: "",
			billFrom: "",
			status: "",
			customer: "",
			createdAt: "",
			amount: 0,
			item: null,
			quantity: null,
			totalamount: null,
			expirydate: null,
			qrRawData: null,
			numberOfTimes: null,
			qrImage: null,
		},
	]);

	const invoiceId = location.state.invoiceId;

	useEffect(() => {
		axios.get(`${API}/merchant/invoice-details/${invoiceId}`).then((res) => {
			setShowData({
				email: res.data.email,
				invoiceRefId: res.data.invoiceRefId,
				mobile: res.data.mobile,
				billTo: res.data.billTo,
				billFrom: res.data.billFrom,
				status: res.data.status,
				customer: res.data.customer,
				createdAt: res.data.createdAt,
				amount: res.data.amount,
				items: res.data.item,
				// item: res.data.item,
				quantity: res.data.quantity,
				totalamount: res.data.totalamount,
				expirydate: res.data.expirydate,
				qrImage: res.data.qrImage,
				// notes: res.data.note,
			});
			console.log("DATA IS ", res.data);
		});
	}, []);

	return (
		<>
			<div className="header">
				<h3 className="header-title">Your Invoice</h3>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
						<div className="card">
							<div className="card-body">
								<div className="d-flex justify-content-between">
									<h4 className="cardmaintitle">
										Order {showData.invoiceRefId} Details
									</h4>
								</div>
								<br />
								<div className="row">
									<div className="col">
										<h6 className="text-primary">General</h6>

										<div className="Boxes">
											<p className="heading">Date Created :</p>
											<span className="text-muted">{showData.createdAt}</span>
										</div>
										<br />
										<p className="heading ">
											Status :
											<span className="text-muted">{showData.status}</span>
										</p>
										<br />
										<p className="heading">
											Customer :
											<span className="text-muted">{showData.customer}</span>
										</p>
									</div>

									<div className="col">
										<h6 className="text-primary">Billing</h6>
										<span className="text-center text-muted">
											{showData.billFrom}
										</span>
										<br />
										<br />
										<p className="heading">Email Address :</p>
										<span className="text-center text-muted">
											{showData.email}
										</span>
										<br />
										<br />
										<p className="heading">Phone Number :</p>
										<span className="text-center text-muted">
											{showData.mobile}
										</span>
									</div>
									<div className="col">
										<h6 className="text-primary">Address</h6>
										<span className="text-center text-muted">
											{showData.billTo}
										</span>
									</div>
								</div>
							</div>
						</div>
						<br />
						<div className="card" id="cardmerchant">
							<div className="card-body">
								{/* <table className="table" id="tablebodyrow">
									<thead>
										<tr>
											<th scope="col" className="tablenone">
												sr
											</th>
											<th scope="col">item</th>
											<th scope="col">Cost</th>
											<th scope="col">Qty</th>
											<th scope="col">Total</th>
										</tr>
									</thead>
									<tbody>
										{showData.items
											? showData.items?.map((item, index) => (
													<tr key={item.item}>
														<td className="tablenone">1</td>
														<td>
															<u>{item.item}</u>
														</td>
														<td>{item.amount}</td>
														<td>{item.quantity}</td>
														<td>{item.amount * item.quantity}</td>
													</tr>
											  ))
											: "No data"}

										<tr>
											<th scope="row"></th>
											<td></td>
											<td>
												<b>Shipping</b>
											</td>
											<td></td>
											<td>
												<b>$5.00</b>
											</td>
										</tr>
										<tr>
											<th scope="row"></th>
											<td></td>
											<td>
												<b>Total</b>
											</td>
											<td></td>
											<td>
												<b>{showData.totalamount + 5}</b>
											</td>
										</tr>
									</tbody>
								</table> */}
								<div className="d-flex justify-content-between">
									<div>
										<label>Total Amount</label>
										<br />
										<p>{showData.totalamount}</p>
									</div>
									<div>
										<label>QR Expiry Date</label>
										<br />
										<p>{showData.expirydate}</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* ....Right side Cards.... */}

					<div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
						<div className="card">
							<div className="card-header">PayPal Here</div>
							<div className="qrcode p-3">
								<img
									src={`data:image/png;base64,${showData.qrImage}`}
									alt="QR"
									width={190}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default UserMerchantDetails;
