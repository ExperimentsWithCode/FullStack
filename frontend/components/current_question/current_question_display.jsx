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
		this.state = { currentQuestion : {answers:{ }}, errors: {}};
		this.selfQuestionTools = this.selfQuestionTools.bind(this);
		this.handleVote = this.handleVote.bind(this)
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
		if (this.state) {
			if (this.state.currentQuestion.id !== undefined ) {
				return (
          <div className="question-display">
            <div className="question-display-content">
              <div className="question-stat-bar">
                <span className="list-view-score">{this.state.currentQuestion.answers.length}</span>
                <span className="list-view-label">answers</span>
              </div>
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
		}
		return (<p> Nothing to render </p>);
	}
  renderQuestionHeader() {
    if (this.state) {
			if (this.state.currentQuestion !== undefined ) {

				return (
          <div className="question-header">
            <div className="sub-header-content full">
              <h2>{this.state.currentQuestion.title}</h2>
              <Link to="/ask" className='submit'>Ask Question</Link>
            </div>
          </div>
			);
			}
		}
		return (<p> Nothing to render </p>);
	}

	renderAnswersHeader(){
		if (this.state.currentQuestion.answers !== undefined){
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
		e.preventDefault();
		let id = e.currentTarget.attributes.value.value
		let val
		let func = (answer) => (answer.id == id)
		let currentQuestion = this.state.currentQuestion
		let answer = currentQuestion.answers.find(func);
		let func2 = (vote) => (this.props.current_user.id == vote.user_id)
		let vote = answer.votes.find(func2)
		if (e.currentTarget.attributes.class.value === "upvote"){
			if (vote !== undefined) { this.props.destroy(vote) }
			val = "1"
			this.props.create({answer_id: id, user_id: this.props.current_user.id, value: val })
		} else if (e.currentTarget.attributes.class.value === "downvote"){
			if (vote !== undefined) { this.props.destroy(vote) }
			val = "-1"
			this.props.create({answer_id: id, user_id: this.props.current_user.id, value: val })
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
		if (this.state) {
			if (this.state.currentQuestion.answers.length !== undefined ) {

				const lineItems = this.state.currentQuestion.answers.map( (answer) => (
					<li className="questions-list-item" key={answer.id}>
						<div className="question-stat-bar">
							<span className={`upvote${this.voted(answer, 1)}`} onClick={this.handleVote} value={answer.id}></span>
							<span className="list-view-score">{answer.vote_count}</span>
							<span className="list-view-label">Votes</span>
							<span className={`downvote${this.voted(answer, -1)}`}  onClick={this.handleVote} value={answer.id} ></span>
						</div>
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
		}
		return (<p> Loading... </p>)
	}


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
	}

}

export default withRouter(CurrentQuestionDisplay);


// {location.hash.slice(2).includes("") ? "All Questions" : "Unanswered"}
//
