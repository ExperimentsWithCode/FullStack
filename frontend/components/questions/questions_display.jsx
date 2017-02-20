import React from 'react';
import { Link, withRouter } from 'react-router';

class QuestionsDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = { questions: {} };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.formType = this.props.formType
	}

	componentDidMount(){
		this.props.index();
	}


	componentWillReceiveProps(newProps){
		if (newProps.route === this.props.route){
			this.state = { questions: {} };
		}
	}

	componentDidUpdate() {
	}



	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const currentQuestion = this.state;
		this.props.create(currentQuestion);
	}

	activeLink(linkPath) {
		if (linkPath === location.hash.slice(2)){
			return " active"
		} else if ("questions" === location.hash.slice(2)){
			if (linkPath === "questions/newest" ){
				return " active"
			}
		}
		return ""
	}

	navLink() {  //newest, active, featured, frequent

		return (
			<div className="tabs">
				<Link to="questions/newest" className={`tab${this.activeLink("questions/newest")}`}>newest</Link>
				<Link to="questions/active" className={`tab${this.activeLink("questions/active")}`}>active</Link>
				<Link to="questions/featured" className={`tab${this.activeLink("questions/featured")}`}>featured</Link>
				<Link to="questions/votes" className={`tab${this.activeLink("questions/votes")}`}>votes</Link>
				<Link to="questions/frequent" className={`tab${this.activeLink("questions/frequent")}`}>frequent</Link>
			</div>
		);
	}

	renderErrors() {
		if (this.props.errors.length > 0){
		return(
			<ul className="errors" >
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		)};
	};

	render() {
		return (
      <div className="container">
  			<div className="split_content">
					<div className="sub-header-content">
						<h2>All Questions</h2>
						{this.navLink()}
					</div>
					<div className="main_content">

					</div>
        </div>
      </div>
		);
	}

}

export default withRouter(QuestionsDisplay);
