// import "../fake-db";
import "../styles/_app.scss";
import React from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import MatxTheme from "./Layout/MatxTheme/MatxTheme";
import AppContext from "./appContext";
import history from "history.js";

import routes from "./RootRoutes";
import { Store } from "./redux/Store";
import IdleTimer from 'react-idle-timer';
import Swal from 'sweetalert2';
import { logout } from '../utils';
import Login from "./views/sessions/SignIn";
import SignUp from "./views/sessions/SignUp";
import ForgotPassword from "./views/sessions/ForgotPassword";
import NotFound from "./views/sessions/NotFound";
import DashBoard from "./views/dashboard/Analytics";
import CreateAdminUser from "./views/dashboard/CreateClient";
import Quotations from "./views/quotations/Quotations";
import CreateQuotation from "./views/quotations/CreateQuotation";
import Invoices from "./views/invoices/Invoices";
import CreateInvoice from "./views/invoices/CreateInvoice";
import Reports from "./views/reports/Reports";
import Administrations from "./views/administrations/Administrations";
import AddUser from "./views/administrations/AddUser";
 
class App extends React.PureComponent {
  constructor() {
		super()

		this.state = {
			isLoader: true,
			isLoadering: false,
			timeout: 1000 * 60 * 30,
			showModal: false,
			userLoggedIn: false,
			isTimedOut: false
		}

		this.idleTimer = null
		this.onAction = this._onAction.bind(this)
		this.onActive = this._onActive.bind(this)
		this.onIdle = this._onIdle.bind(this)
	}
  _onAction(e) {
		this.setState({
			isTimedOut: false
		})
	}

	_onActive(e) {
		this.setState({
			isTimedOut: false
		})
	}

	_onIdle(e) {
		const isTimedOut = this.state.isTimedOut
		if (isTimedOut) {
			logout();
		} else {
			this.setState({
				showModal: true
			})
			this.idleTimer.reset();
			this.setState({
				isTimedOut: true
			})
			Swal.fire({
				// position: 'top-end',
				icon: 'info',
				title: '<strong style="font-size: 24px;padding-top: 20px;padding-bottom: 20px;">You are being logged out due to inactivity</strong>',
				padding: '3em',
				width: 400,
				showConfirmButton: false,
				allowOutsideClick: true,
				timer: 30000,
				heightAuto: false,
				onClose: () => {
					logout();
				}
			}).then((result) => {
				logout();
			})
		}

	}
  render() {
    const TOKEN = localStorage.getItem('token');
    console.log(TOKEN);
		let redirectURL = "/?red_url=" + window.location.href;
    if (!TOKEN) {
      return (
        <AppContext.Provider value={{ routes }}>
          <Provider store={Store}>
            <MatxTheme>
              {/* <Auth> */}
                <Router history={history}>
                    {/* <AuthGuard /> */}
                    <Switch>
                      <Route exact={true} path="/" component={Login} />
                      <Route path="/signup" component={SignUp} />
                      <Route path="/forgot-password" component={ForgotPassword} />
                      <Route path="/404" component={NotFound} />
                      <Route render={() => (<Redirect to={redirectURL} />)} />
                    </Switch>
                </Router>
              {/* </Auth> */}
            </MatxTheme>
          </Provider>
        </AppContext.Provider>
      );
    } else {
      return (
        <AppContext.Provider value={{ routes }}>
          <IdleTimer
						ref={ref => { this.idleTimer = ref }}
						element={document}
						onActive={this.onActive}
						onIdle={this.onIdle}
						onAction={this.onAction}
						debounce={250}
						timeout={this.state.timeout} />
          <Provider store={Store}>
            <MatxTheme>
              {/* <Auth> */}
                <Router history={history}>
                  {/* <Layout /> */}
                  <Switch>
                      <Route exact={true} path="/dashboard" component={DashBoard} />
                      <Route path="/create-client" component={CreateAdminUser} />
                      <Route path="/quotations" component={Quotations} />
                      <Route path="/create-quotation" component={CreateQuotation} />
                      <Route path="/invoices" component={Invoices} />
                      <Route path="/create-invoice" component={CreateInvoice} />
                      <Route path="/reports" component={Reports} />
                      <Route path="/administrations" component={Administrations} />
                      <Route path="/add-user" component={AddUser} />
                      <Route path="/404" component={NotFound} />
                      
                      <Route render={() => (<Redirect to={'/dashboard'} />)} />
                    </Switch>
                </Router>
              {/* </Auth> */}
            </MatxTheme>
          </Provider>
        </AppContext.Provider>
      );
    }
  }
};

export default App;
