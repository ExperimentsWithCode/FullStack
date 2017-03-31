import React from 'react';
import { Link, withRouter } from 'react-router';
import { MainNavDisplay } from '../nav/main_nav_display';
import { SideNavDisplay } from '../nav/side_nav_display';
import { BulletinDisplay } from '../bulletin/bulletin_display';
import QuestionLineItem  from './question_line_item';

class QuestionsDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.formType = this.props.formType;
		this.state = this.props.questions;
		this.route = this.props.routeParams.wildcard
		this.query = this.props.routeParams.query
	}

	componentDidMount(){
		if (this.props.routeParams.query === undefined){
			this.props.index();
		} else {
			this.props.index(decodeURI(this.props.routeParams.query));
		}
	}


	componentWillReceiveProps(newProps){
		this.state = newProps.questions;
	}


	componentDidUpdate() {
		if (this.props.routeParams.wildcard !== this.route){
			this.route = this.props.routeParams.wildcard
			if (this.props.routeParams.wildcard === 'active'){
				this.props.sortQuestionsActive()
			} else if (this.props.routeParams.wildcard === 'newest'){
				this.props.sortQuestionsNewest()
			} else if (this.props.routeParams.wildcard === 'votes'){
				this.props.sortQuestionsVotes()
			}
		} else if (this.props.routeParams.query !== this.query){
				this.query = this.props.routeParams.query
				if (this.props.routeParams.query === undefined){
					this.props.index();
				} else {
					this.props.index(decodeURI(this.props.routeParams.query));
				}
			}
	}


	renderQuestionsList() {

		if (this.state) {
			if (this.state.questions.length !== undefined ) {
				const lineItems = this.state.questions.map( (question) => (
					< QuestionLineItem key={question.id} question={question} />)
				);
				return (
					<ul className="questions-list">
						{lineItems}
					</ul>
			);
			}
		}
		return (<p> Loading... </p>)
	}


	render() {
		return (
      <div className="container">
  			<div className="split-content">
					<div className="main-content">
						<div className="sub-header-content">
							<h3>{this.props.routeParams.query ?
									`Search: ${this.props.routeParams.query}` : `All Questions`}</h3>
							<MainNavDisplay currentLocation={location.hash.slice(2)}/>
						</div>
						{this.renderQuestionsList()}
					</div>
					<div className="side-content">
						<SideNavDisplay questions={this.state.questions} />
						<BulletinDisplay />
					</div>
        </div>
      </div>
		);
	}

}

export default withRouter(QuestionsDisplay);


// {location.hash.slice(2).includes("") ? "All Questions" : "Unanswered"}
