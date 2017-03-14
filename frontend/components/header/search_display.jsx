import React from 'react';


class SeachDisplay extends React.Component {
	constructor(props) {
		super(props);
    this.state = {query:""}
	}

	componentDidMount(){
	}

	componentDidUpdate() {
		// if (this.props.routeParams.query !== this.state.query){
		// 	this.query = ""
		// }
	}


  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e) {
		e.preventDefault();
    this.props.router.push(`/question/${this.state.query}`)
	}

	render() {
		debugger
		return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input className="search-bar" onChange={this.update("query")}  placeholder="Search..."></input>
      </form>
		);
	}

}

export default SeachDisplay;
