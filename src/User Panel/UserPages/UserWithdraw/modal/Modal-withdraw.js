import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ setIsOpen }) => {
	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<p className={styles.heading}>Manual Withdrawal Request</p>
					</div>

					<div className={styles.modalContent}>
						<div className={styles.key}>
							<h5>Amount Requested</h5>
						</div>
						<div className={styles.value}>
							<p>USD-17,567,78</p>
						</div>
					</div>
					<div className={styles.modalContent}>
						<div className={styles.key}>
							<h5>Amount Requested</h5>
						</div>
						<div className={styles.value}>
							<div className="user-tranaction-inputs pe-4">
								<select className="form-select user-tranaction-inputs-design ">
									<option selected>Merchant</option>
									<option value="1">Mr.</option>
									<option value="2">Mrs.</option>
								</select>
								<a href="#h">
									<h6 className="text-info ">+ Add Account</h6>
								</a>
							</div>
						</div>
					</div>
					<div className={styles.modalContent}>
						<div className={styles.key}>
							<h5>Comments</h5>
						</div>
						<div className={styles.value}>
							<div class="form-group pe-4">
								<textarea
									class="form-control"
									id="exampleFormControlTextarea1"
									rows="2"></textarea>
							</div>
						</div>
					</div>
					<div className={styles.modalActions}>
						<div className={styles.actionsContainer}>
							<button
								className={styles.deleteBtn}
								onClick={() => setIsOpen(false)}>
								Cancel
							</button>
							<button
								className={styles.confirmBtn}
								onClick={() => setIsOpen(false)}>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
