import React from 'react';
import { Link, withRouter } from 'react-router';
import { MainNavLink } from '../nav/main_nav_display';

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





	render() {
		return (
      <div className="container">
  			<div className="split_content">
					<div className="main_content">
						<div className="sub-header-content">
							<h2>{location.hash.slice(2).includes("questions") ? "All Questions" : "Unanswered"}</h2>
							<MainNavLink currentLocation={location.hash.slice(2)} />
						</div>
					</div>
        </div>
      </div>
		);
	}

}

export default withRouter(QuestionsDisplay);
