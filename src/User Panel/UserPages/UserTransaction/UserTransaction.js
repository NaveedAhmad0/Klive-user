import React, { Component } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import UserForm from "../../UserPanelComponents/UserPanelForm/UserForm";
import UserTable from "../../UserPanelComponents/UserPanelTable/UserTable";

export class UserTransaction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			active: "",
		};
		// this.statusChangedHandler = this.statusChangedHandler.bind(this);
		// this.addTodo = this.addTodo.bind(this);
		// this.removeTodo = this.removeTodo.bind(this);
		// this.inputChangeHandler = this.inputChangeHandler.bind(this);
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
							<h4 className="page-title">Transaction History</h4>
						</div>
					</div>
				</div>

				<UserForm />
				<UserTable />
			</div>
		);
	}
}
export default UserTransaction;
