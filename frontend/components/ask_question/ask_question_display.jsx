import React from 'react';
import { Link, withRouter } from 'react-router';

class AskQuestionDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = { title: "", body: "", author_id: this.props.current_user.id };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.navigateToIndex = this.navigateToIndex.bind(this);
	}

	componentWillReceiveProps(newProps){
		if (newProps.route.path === "/ask"){
			this.state = { title: "", body: "", author_id: this.props.current_user.id };
		} else if (newProps.currentQuestion.author_id === this.props.current_user.id ){
			this.state = newProps.currentQuestion;
		}
	}

	componentDidUpdate() {
	}

	ensureLoggedIn() {
		if (!this.props.loggedIn) {
			this.props.router.push("/login");
		}
	}

	navigateToIndex() {
    this.props.router.push("/");
  }

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const currentQuestion = this.state;
		if (this.props.route.path === "/ask"){
			this.props.create(currentQuestion).then(({currentQuestion})=>{
				this.props.router.push(`/question/${currentQuestion.id}`)}
				);
		} else {
			this.props.update(currentQuestion).then(({currentQuestion})=>{
				this.props.router.push(`/question/${currentQuestion.id}`)}
			);
		}


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

	renderSubmit() {
		if (this.props.route.path === "/ask"){
			return (
				<input type="submit" value="Post Your Question"
					className="submit question"/>)
		} else return (
			<input type="submit" value="Update Your Question"
				className="submit question"/>)
	};

	render() {
		return (

      <div className="container">
				<div className="split-content">
	        <form onSubmit={this.handleSubmit} className="main-content">
						{this.renderErrors()}
						<div className="question-title-input" >
							<label> Title</label>
							<input type="text"
								value={this.state.title}
								onChange={this.update("title")} />
						</div>

						<div className="question-body-input" >
							<textarea className="question-body-textarea" rows="10" onChange={this.update("body")} value={this.state.body}>
							</textarea>
						</div>
						{ this.renderSubmit() }
	        </form>
	      </div>
      </div>
		);
	}

}

export default withRouter(AskQuestionDisplay);
