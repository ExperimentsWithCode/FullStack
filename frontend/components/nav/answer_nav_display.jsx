import React from 'react';
import { Link, withRouter } from 'react-router';

const activeLink = ({currentLocation, linkPath}) => {
	if (currentLocation.includes(linkPath)){
		return " active";
	} else if (currentLocation.split('/').length > 2 ){
		if (linkPath === "votes" ){
			return " active";
		}
	}
	return "";
} 

export const AnswerNavDisplay = ({currentLocation}) => {  //newest, active, featured, frequent
	return (
		<div className="tabs">
			<Link to="active" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "active"})}`}>active</Link>
			<Link to="oldest" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "oldest"})}`}>oldest</Link>
			<Link to="votes" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "votes"})}`}>votes</Link>
		</div>
	);
}
