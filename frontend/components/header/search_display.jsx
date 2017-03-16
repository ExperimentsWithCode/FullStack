import React from 'react';
import { Link, withRouter } from 'react-router';


class SearchDisplay extends React.Component {
	constructor(props) {
		super(props);
    this.state = {query:""}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.update = this.update.bind(this)
		this.path = this.props.router.location.pathname
	}

	componentDidMount(){
	}

	componentDidUpdate() {
		if (this.path != this.props.router.location.pathname){
			this.path = this.props.router.location.pathname
			if (!this.props.router.location.pathname.includes('search')){
				this.state.query = ""
				return () => this.setState({
					["query"]: ""
				});
			}
		}
	}


  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e) {
		e.preventDefault();
    this.props.router.push(`/search/${encodeURI(this.state.query)}`)
	}

	render() {
		return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input className="search-bar" onChange={this.update("query")} value={this.state.query} placeholder="Search..."></input>
      </form>
		);
	}

}

export default withRouter(SearchDisplay);
