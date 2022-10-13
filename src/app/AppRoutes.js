import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

// const HomePage = lazy(() => import("../Homepage/HomePage"));
const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

// ADMIN PANEL IMPORTS

// -------------------------------- USER PANEL IMPORTS ---------------------------------------------

const UserRegistration = lazy(() =>
	import("../User Panel/UserPages/Registration/UserRegistration")
);

const ForgotPassword = lazy(() =>
	import("../User Panel/UserPages/Registration/ForgotPassword")
);
const ResetPassword = lazy(() =>
	import("../User Panel/UserPages/Registration/ResetPassword")
);

const UserLogin = lazy(() =>
	import("../User Panel/UserPages/Registration/UserLogin")
);

const UserDashboard = lazy(() =>
	import("../User Panel/UserPages/UserDashboard/UserDashboard")
);

const UserProfile = lazy(() =>
	import("../User Panel/UserPages/UserProfile/UserProfile")
);
const GetUserProfile = lazy(() =>
	import("../User Panel/UserPages/Get user Profile/GetUserProfile")
);

const UserDeposites = lazy(() =>
	import("../User Panel/UserPages/UserDeposites/UserDeposites")
);

const UserTransaction = lazy(() =>
	import("../User Panel/UserPages/UserTransaction/UserTransaction")
);

const DepositeToMerchandise = lazy(() =>
	import("../User Panel/UserPages/DepositeToMerchandise/DepositeToMerchandise")
);

const UserWithdraw = lazy(() =>
	import("../User Panel/UserPages/UserWithdraw/UserWithdraw")
);

const UserMerchantDetails = lazy(() =>
	import("../User Panel/UserPages/DepositeToMerchandise/UserMerchantDetails")
);
// -------------------------------- MERCHANT PANEL IMPORTS ---------------------------------------------

class AppRoutes extends Component {
	render() {
		return (
			<Suspense fallback={<Spinner />}>
				<Switch>
					{/* <Route exact path="/homepage" component={HomePage} /> */}
					{/* <Route exact path="/homepage" component={UserLogin} /> */}
					<Route exact path="/basic-ui/buttons" component={Buttons} />
					<Route exact path="/basic-ui/dropdowns" component={Dropdowns} />

					<Route
						exact
						path="/form-Elements/basic-elements"
						component={BasicElements}
					/>

					<Route exact path="/tables/basic-table" component={BasicTable} />

					<Route exact path="/icons/mdi" component={Mdi} />

					<Route exact path="/charts/chart-js" component={ChartJs} />

					<Route exact path="/user-pages/login-1" component={Login} />
					<Route exact path="/user-pages/register-1" component={Register1} />

					{/*------------------------- USER PANEL ROUTES -------------------------- */}
					<Route exact path="/user/registration" component={UserRegistration} />

					<Route
						exact
						path="/user/registration/forgotPassword"
						component={ForgotPassword}
					/>

					<Route exact path="/user/resetPassword" component={ResetPassword} />

					<Route exact path="/user/login" component={UserLogin} />

					<Route exact path="/user/UserDashboard" component={UserDashboard} />

					<Route exact path="/user/EditProfile" component={UserProfile} />
					<Route exact path="/user/UserProfile" component={GetUserProfile} />

					<Route exact path="/user/UserDeposites" component={UserDeposites} />

					<Route
						exact
						path="/user/UserTransaction"
						component={UserTransaction}
					/>

					<Route
						exact
						path="/user/DepositeToMerchandise"
						component={DepositeToMerchandise}
					/>

					<Route exact path="/user/UserWithdraw" component={UserWithdraw} />

					<Route
						exact
						path="/user/user-merchant-datails"
						component={UserMerchantDetails}
					/>

					{/*---------------------------- ERROR PAGE ------------------ */}

					<Route exact path="/error-pages/error-404" component={Error404} />
					<Route exact path="/error-pages/error-500" component={Error500} />

					<Redirect to="/user/login" />
				</Switch>
			</Suspense>
		);
	}
}

export default AppRoutes;
