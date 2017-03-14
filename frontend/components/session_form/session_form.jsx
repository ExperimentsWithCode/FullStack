import React from 'react';
import { Link, withRouter } from 'react-router';

const guestUsername = "guest-user"
const guestPass = "1Y4xNQBhe1KS8vOJpHdB9A"

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "", email:"", errors:[]};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(newProps){
		if (newProps.route !== this.props.route){
			this.state = { username: "", password: "", email:"", errors:[]};
			this.props.clear()
		}
	}
	componentDidUpdate() {
		if (this.state.username === guestUsername &&
				this.state.password === guestPass){
			this.handleSubmit()
		}
		this.redirectIfLoggedIn();
		// this.state = { username: "", password: "", email:""};
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}
	setGuest() {
		// const user = {
		// 	"username": "guest-user",
		// 	"password": "1Y4xNQBhe1KS8vOJpHdB9A"
		// }
		// this.props.processForm({user});
		return e => this.setState({
			"username": guestUsername,
			"password": guestPass
		});
	}
	handleSubmit(e) {
		if (e) e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return (
				<div id="tabs">
					<Link to="/login" className="tab active">Log In</Link>
					<Link to="/signup" className="tab">Sign Up</Link>
				</div>
			)
		} else {
			return (
				<div id="tabs">
					<Link to="/login" className="tab">Log In</Link>
					<Link to="/signup" className="tab active">Sign Up</Link>
				</div>
			)
		}
	}


	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	renderGuest() {
		if (this.props.formType === "login"){
			return <button type="button" className="submit special" onClick={this.setGuest()}>Guest</button>
		} else { return "" }
	}

	renderAdditionalSignupFields() {
		if (this.props.formType === "signup"){
			return(
				<label> Email:<br/>
					<input type="text"
						value={this.state.email}
						onChange={this.update("email")}
						className="login-input" />
				</label>
			);
		} else { return "" }
	}

	render() {
		return (
			<div className="content">

				<div className="login-form-container">
					<div className="sub-header-session">
						{this.navLink()}
					</div>
					<h2>{"Create your Heap Spill account. It's free and only takes a minute."}</h2><br/>
					<form onSubmit={this.handleSubmit} className="login-form-box">

						<div className="login-form">

							{this.renderErrors()}
							<label> Display Name:<br/>
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>

							<label> Password:<br/>
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							{  this.renderAdditionalSignupFields() }
							<br/>
							<div className="session-form-buttons">
								<input type="submit" value="Submit" className="submit"/>
								{this.renderGuest()}
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
