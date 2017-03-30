import React from 'react';
import { Link, withRouter } from 'react-router';
import { SideNavDisplay } from '../nav/side_nav_display';
import FormatDate from '../../util/format_date_util.js';
import AuthorBoxDisplay from '../user_box/author_box_display';
import { AnswerNavDisplay } from '../nav/answer_nav_display';
import AnswerFormContainer from '../answer_form/answer_form_container';
import { headerLoggedOut } from '../header/header_display';
import AnswerLineItem from './answer_line_item';


class CurrentQuestionDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.formType = this.props.formType;
		this.state = { currentQuestion : {answers:{ }}, errors: {} };
		this.route = this.props.routeParams.wildcard
		this.selfQuestionTools = this.selfQuestionTools.bind(this);
		this.handleVote = this.handleVote.bind(this)
		this.renderVotes = this.renderVotes.bind(this)
	}

	componentDidMount(){
		this.props.show(this.props.params.id);
	}


	componentWillReceiveProps(newProps){
		if (this.state !== newProps){
			this.state = newProps;
		}
	}


	componentDidUpdate() {
		if (this.props.routeParams.wildcard !== this.route){
			this.route = this.props.routeParams.wildcard
			if (this.props.routeParams.wildcard === 'active'){
				this.props.sortAnswersActive()
			} else if (this.props.routeParams.wildcard === 'oldest'){
				this.props.sortAnswersOldest()
			} else if (this.props.routeParams.wildcard === 'votes'){
				this.props.sortAnswersVotes()
			}
		}
	}




  formatDate(theDate){
    return `asked ${FormatDate(theDate)}`;
  }

	selfQuestionTools(){

		if (this.props.current_user === null || this.props.current_user.id !== this.state.currentQuestion.author.id ){
			return <div></div>
		}
		return <Link to={`/ask/${this.props.params.id}`}>Edit</Link>

	}
	renderQuestion() {
		return (
      <div className="question-display">
        <div className="question-display-content">
					
          <p>{this.state.currentQuestion.body}</p>
        </div>
        <div className="question-display-content">
          <div className="question-stat-bar">
          </div>
          <div className="question-display-footer">
            {this.selfQuestionTools()}
						{AuthorBoxDisplay(this.state.currentQuestion.author, this.state.currentQuestion.created_at )}
          </div>
        </div>
      </div>
		);
	}

  renderQuestionHeader() {
		return (
      <div className="question-header">
        <div className="sub-header-content full">
          <h2>{this.state.currentQuestion.title}</h2>
          <Link to="/ask" className='submit'>Ask Question</Link>
        </div>
      </div>
		);
	}

	renderAnswersHeader(){
		if (this.state.currentQuestion && String(this.state.currentQuestion.id) === this.props.params.id ){
			return (
				<div className="sub-header-content">
					<h3>{`${this.state.currentQuestion.answers.length} Answers`}</h3>
					<AnswerNavDisplay currentLocation={location.hash.slice(2)} />
				</div>
			);}
		return  (
			<div className="sub-header-content">
				&nbsp;
			</div>
		);
	}

	voted(answer, val) {
		let user_voted = false;
		let current_user_id = this.props.current_user ? this.props.current_user.id : -1
 		if (answer.votes.length > 0){
			answer.votes.forEach((vote)=> {
				if (vote.user_id === current_user_id && vote.value === val){
					user_voted = true
				};
			});
		}
		return user_voted ? " active" : "";
	}


	handleVote(e) {
		// e.preventDefault();
		let id = e.currentTarget.attributes.value.value.slice(1)
		let type
		let val
		if (e.currentTarget.attributes.value.value.slice(0,1) == 'Q'){
			type = "Question"
		} else {type = "Answer"}
		let func = (answer) => (answer.id == id)
		let currentQuestion = this.state.currentQuestion
		let answer = currentQuestion.answers.find(func);
		let func2 = (vote) => (this.props.current_user.id == vote.user_id)
		let vote = answer.votes.find(func2)
		if (e.currentTarget.attributes.class.value === "upvote"){
			if (vote !== undefined) { this.props.destroy(vote) }
			val = "1"
			this.props.create({votable_id: id, votable_type: type, user_id: this.props.current_user.id, value: val })
		} else if (e.currentTarget.attributes.class.value === "downvote"){
			if (vote !== undefined) { this.props.destroy(vote) }
			val = "-1"
			this.props.create({votable_id: id, votable_type: 'Answer', user_id: this.props.current_user.id, value: val })
		} else {

			this.props.destroy(vote)
		}
		this.props.show(currentQuestion.id)
	}
// e.preventDefault();
// e.currentTarget.attributes.class.value
// e.currentTarget.attributes.value.value
// x = this.state.currentQuestion.answers.find((answer, id)=> answer.id === id)
	renderAnswersList() {
			if (this.state.currentQuestion.answers.length !== undefined ) {
				const lineItems = this.state.currentQuestion.answers.map( (answer) => (
					<li className="questions-list-item" key={answer.id}>
						{ this.renderVotes(answer, "A")}
						<div className="question-summary">
							<p>{answer.body}</p>
							{ AuthorBoxDisplay(answer.author, answer.created_at, true )}
						</div>
					</li>
				));
				return (
					<ul className="questions-list">
						{lineItems}
					</ul>
				);
			}
			else return (<p> Loading... </p>)
	}

	renderVotes(subject, type){
		return (
		<div className="question-stat-bar">
			<button className={`upvote${this.voted(subject, 1)}${
					this.props.current_user === null ? " disabled" : ""}`}
					disabled={this.props.current_user === null}
					onClick={this.handleVote} value={`${type+subject.id.toString()}`}></button>
			<span className="list-view-score">{subject.vote_count}</span>
			<span className="list-view-label">Votes</span>
			<button className={`downvote${this.voted(subject, -1)}${
					this.props.current_user === null ? " disabled" : ""}`}
					disabled={this.props.current_user === null}
					onClick={this.handleVote} value={`${type+subject.id.toString()}`} ></button>
		</div>
	)}


	renderAnswerForm(){
		if (this.props.current_user === null){
			return (
				<div>
					<br></br>
					<h3>You must be logged in to submit an answer.</h3>
					<br></br>
						<div className="header-group-right">
							<Link to="/login" className="button-session link">Log In</Link>
							<Link to="/signup" className="button-session special">Sign Up</Link>
					  </div>
				</div>
			)
		}
		else{
			return <AnswerFormContainer />
		}
	}

	render() {
		if (this.state.currentQuestion && String(this.state.currentQuestion.id) === this.props.params.id ){
			return (
	      <div className="container">
	        {this.renderQuestionHeader()}
	  			<div className="split-content">
						<div className="main-content">
	            <div className="questions-list">
	              {this.renderQuestion()}
	            </div>
							{this.renderAnswersHeader()}
							{this.renderAnswersList()}
							{this.renderAnswerForm()}
						</div>
						<div className="side-content">
						</div>
	        </div>
	      </div>
			);
		} else return (<div className="container"><p> loading.. </p></div>);
	}
}

export default withRouter(CurrentQuestionDisplay);


// {location.hash.slice(2).includes("") ? "All Questions" : "Unanswered"}
//
