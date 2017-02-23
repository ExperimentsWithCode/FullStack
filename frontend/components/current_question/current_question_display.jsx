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
		this.state = { currentQuestion : {answers:{}}, errors: {}};
		this.selfQuestionTools = this.selfQuestionTools.bind(this);
	}

	componentDidMount(){
		this.props.show(this.props.params.id);
	}


	componentWillReceiveProps(newProps){
		this.state = newProps.question;
	}


	componentDidUpdate() {

	}


  formatDate(theDate){
    return `asked ${FormatDate(theDate)}`;
  }

	selfQuestionTools(){
		if (this.props.current_user === null || this.props.current_user.id === this.state.currentQuestion.author.id ){
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
		if (this.state.currentQuestion.answers[0] !== undefined){
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

	renderAnswersList() {
		debugger
		if (this.state) {
			if (this.state.currentQuestion.answers.length !== undefined ) {

				const lineItems = this.state.currentQuestion.answers.map( (answer) => (< AnswerLineItem key={answer.id} answer={answer} />));
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
						<div className="header-group-left">
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
