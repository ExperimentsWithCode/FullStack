import React from 'react';
import { Link, withRouter } from 'react-router';

class AnswerFormDisplay extends React.Component {
	constructor(props) {
		super(props);
		let author_id
		this.props.current_user === null ? author_id = false : author_id = this.props.current_user.id
		this.state = { body: "", author_id: author_id, question_id: this.props.params.id};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(newProps){
		if (newProps.route === this.props.route){
			let author_id
			this.props.current_user === null ? author_id = false : author_id = this.props.current_user.id
			this.state = { body: "", author_id: author_id, question_id: this.props.params.id};
		}
	}

	componentDidUpdate() {
	}

	ensureLoggedIn() {
		if (!this.props.loggedIn) {
			this.props.router.push("/login");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
    this.ensureLoggedIn();
		const currentQuestion = this.state;
		this.props.create(this.state);
		let author_id
		this.props.receiveCurrentAnswer
		this.props.show(this.props.params.id);
		// this.props.current_user === null ? author_id = false : author_id = this.props.current_user.id
		// this.setState({ body: "", author_id: author_id, question_id: this.props.params.id})

	}

	renderErrors() {
		debugger
		if (this.props.errors.length > 0){
		return(
			<ul className="errors" >
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);}
	}

	render() {
		return (
      <form onSubmit={this.handleSubmit} className="main-content">
				<br/>
				<h3>Your Answer</h3>

        {this.renderErrors()}
        <div className="question-body-input" >
          <textarea className="question-body-textarea" rows="10" onChange={this.update("body")} value={this.state.body}>
          </textarea>
        </div>
        <input type="submit" value="Post Your Answer" className="submit question"/>
      </form>
    );
 	}

}

export default withRouter(AnswerFormDisplay);
