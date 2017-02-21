import React from 'react';
import { Link, withRouter } from 'react-router';

const activeLink = ({currentLocation, linkPath}) => {
	if (linkPath === currentLocation){
		return " active";
	} else if ("" === currentLocation){
		if (linkPath === "newest" ){
			return " active";
		}
	}
	return "";
}

export const MainNavLink = ({currentLocation}) => {  //newest, active, featured, frequent
	return (
		<div className="tabs">
			<Link to="newest" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "newest"})}`}>newest</Link>
			<Link to="frequent" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "frequent"})}`}>frequent</Link>
			<Link to="votes" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "votes"})}`}>votes</Link>
			<Link to="active" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "active"})}`}>active</Link>
		</div>
	);
}
