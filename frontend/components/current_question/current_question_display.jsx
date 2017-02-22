import React from 'react';
import { Link, withRouter } from 'react-router';
import { SideNavDisplay } from '../nav/side_nav_display';
import FormatDate from '../../util/format_date_util.js';
import AuthorBoxDisplay from '../user_box/author_box_display';
import { AnswerNavDisplay } from '../nav/answer_nav_display';
import AnswerFormContainer from '../answer_form/answer_form_container';


class CurrentQuestionDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.formType = this.props.formType;
		this.state = { currentQuestion : {answers:{}}, errors: {}};
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
                <Link to={`/ask/${this.props.params.id}`}>Edit</Link>
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
		if (this.state.currentQuestion.answers[0] !== "undefined"){
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
            <AnswerFormContainer />
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
