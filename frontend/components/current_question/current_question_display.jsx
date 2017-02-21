import React from 'react';
import { Link, withRouter } from 'react-router';
import { SideNavDisplay } from '../nav/side_nav_display';

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
    debugger
		this.state = newProps.question;
	}


	componentDidUpdate() {

	}




	render() {
		return (
      <div className="container">
  			<div className="split-content">
					<div className="main-content">
            <h1>Main Content</h1>
					</div>
					<div className="side-content">
            <SideNavDisplay questions={null} />
					</div>
        </div>
      </div>
		);
	}

}

export default withRouter(CurrentQuestionDisplay);


// {location.hash.slice(2).includes("") ? "All Questions" : "Unanswered"}
//
