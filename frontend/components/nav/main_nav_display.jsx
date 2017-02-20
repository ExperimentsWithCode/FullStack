import React from 'react';
import { Link, withRouter } from 'react-router';

const activeLink = ({currentLocation, linkPath}) => {
	if (linkPath === currentLocation){
		return " active";
	} else if ("questions" === currentLocation){
		if (linkPath === "questions/newest" ){
			return " active";
		}
	}
	return "";
}

export const MainNavLink = ({currentLocation}) => {  //newest, active, featured, frequent

	return (
		<div className="tabs">
			<Link to="questions/newest" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "questions/newest"})}`}>newest</Link>
			<Link to="questions/active" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "questions/active"})}`}>active</Link>
			<Link to="questions/featured" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "questions/featured"})}`}>featured</Link>
			<Link to="questions/votes" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "questions/votes"})}`}>votes</Link>
			<Link to="questions/frequent" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "questions/frequent"})}`}>frequent</Link>
		</div>
	);
}
