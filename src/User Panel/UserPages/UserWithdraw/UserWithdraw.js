import React, { useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import UserTable from "../../UserPanelComponents/UserPanelTable/UserTable";
import Modal from "./modal/Modal-withdraw";

function WithdrawalRequest() {
	const [isOpen, setIsOpen] = useState(false);
	// this.statusChangedHandler = this.statusChangedHandler.bind(this);
	// this.addTodo = this.addTodo.bind(this);
	// this.removeTodo = this.removeTodo.bind(this);
	// this.inputChangeHandler = this.inputChangeHandler.bind(this);

	return (
		<div>
			<div className="row page-title-header">
				<div className="col-12">
					<div className="page-header">
						<h4 className="page-title">Withdrawal Request</h4>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 grid-margin">
					<div className="d-flex newboxcss2 shadow-lg">
						<div className="wrapper">
							<h4 className="mb-0 font-weight-medium text-primary">
								Available for withdrawal
							</h4>
							<h3 className="mb-0 font-weight-semibold">-17,577,89</h3>
							<p className="mb-0">USD</p>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin ">
					<div className="d-flex newboxcss2 shadow-lg">
						<div className="wrapper">
							<h5 className="mb-0 font-weight-medium text-info">
								Current Balance
							</h5>
							<h3 className="mb-0 font-weight-semibold">15,577,62</h3>
							<p className="mb-0">USD</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row my-3">
				<div className="col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 grid-margin">
					<button
						className="btn btn-success btn-lg rounded-pill"
						onClick={() => setIsOpen(true)}>
						Request Withdrawal
					</button>
				</div>
				{isOpen && <Modal setIsOpen={setIsOpen} />}
			</div>
			<UserTable />
		</div>
	);
}
export default WithdrawalRequest;
