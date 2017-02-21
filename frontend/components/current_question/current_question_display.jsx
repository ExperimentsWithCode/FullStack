import React from 'react';
import { Link, withRouter } from 'react-router';
import { SideNavDisplay } from '../nav/side_nav_display';
import Moment from 'moment'

class CurrentQuestionDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.formType = this.props.formType;
		this.state = this.props.question;
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
    return `asked ${Moment(theDate).format('MMM Do YYYY, h:mm:ss a')}`;
  }

	renderQuestion() {
		if (this.state) {
			if (this.state.currentQuestion.id !== undefined ) {
        debugger
				return (
          <div className="question-display">
            <div className="question-display-content">
              <div className="question-stat-bar">
                <span className="list-view-score">0</span>
                <span className="list-view-label">answers</span>
              </div>
              <p>{this.state.currentQuestion.body}</p>
            </div>
            <div className="question-display-content">
              <div className="question-stat-bar">
              </div>
              <div className="question-display-footer">
                <Link to={`/ask/${this.props.params.id}`}>Edit</Link>
                <div className="author-info">
                  <p>{this.formatDate(this.state.currentQuestion.created_at)}</p>
                  <p>{this.state.currentQuestion.author.username}</p>
                </div>
              </div>
            </div>
          </div>

			);
			}
		}
		return (<p> Nothing to render </p>)
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
		return (<p> Nothing to render </p>)
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

// BOTTOM ROW ON QUESTION PAGE
// <table class="fw">
//     <tbody><tr>
//     <td class="vt">
// <div class="post-menu"><a href="/q/42375655/1810266" title="short permalink to this question" class="short-link" id="link-post-42375655">share</a><span class="lsep">|</span><span class="disabled-link" title="Another edit is awaiting approval for this post. Further edits cannot be submitted until the pending edit is reviewed.">edit</span><span class="lsep">|</span><a href="#" class="flag-post-link" title="flag this post for serious problems or moderator attention" data-postid="42375655">flag</a></div>
//     </td>
//     <td class="post-signature owner">
//         <div class="user-info ">
//     <div class="user-action-time">
//         asked <span title="2017-02-21 18:53:53Z" class="relativetime">1 hour ago</span>
//     </div>
//     <div class="user-gravatar32">
//         <a href="/users/5589727/phil-viton"><div class="gravatar-wrapper-32"><img src="https://www.gravatar.com/avatar/dc55e569252429a92fb532e11cbd081d?s=32&amp;d=identicon&amp;r=PG&amp;f=1" alt="" width="32" height="32"></div></a>
//     </div>
//     <div class="user-details">
//         <a href="/users/5589727/phil-viton">Phil Viton</a>
//         <div class="-flair">
//             <span class="reputation-score" title="reputation score " dir="ltr">1</span>
//         </div>
//     </div>
// </div>
//     </td>
//     </tr>
//     </tbody></table>
