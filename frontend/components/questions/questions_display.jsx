import React from 'react';
import { Link, withRouter } from 'react-router';
import { MainNavDisplay } from '../nav/main_nav_display';
import { SideNavDisplay } from '../nav/side_nav_display';
import QuestionLineItem  from './question_line_item';

class QuestionsDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.formType = this.props.formType;
		this.state = this.props.questions;
	}

	componentDidMount(){
		this.props.index();
	}


	componentWillReceiveProps(newProps){
		this.state = newProps.questions;
	}


	componentDidUpdate() {

	}


	renderQuestionsList() {

		if (this.state) {
			if (this.state.questions.length !== undefined ) {

				const lineItems = this.state.questions.map( (question) => (< QuestionLineItem key={question.id} question={question} />));
				return (
					<ul className="questions-list">
						{lineItems}
					</ul>
			);
			}
		}
		return (<p> Nothing to render </p>)
	}


	render() {
		return (
      <div className="container">
  			<div className="split-content">
					<div className="main-content">
						<div className="sub-header-content">
							<h3>All Questions</h3>
							<MainNavDisplay currentLocation={location.hash.slice(2)} />
						</div>
						{this.renderQuestionsList()}
					</div>
					<div className="side-content">
						<SideNavDisplay questions={this.state.questions} />
					</div>
        </div>
      </div>
		);
	}

}

export default withRouter(QuestionsDisplay);


// {location.hash.slice(2).includes("") ? "All Questions" : "Unanswered"}
