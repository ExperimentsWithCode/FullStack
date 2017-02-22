import React from 'react';
import { Link, withRouter } from 'react-router';

const activeLink = ({currentLocation, linkPath}) => {
	if (currentLocation.includes(linkPath)){
		return " active";
	} else if (currentLocation.split('/').length === 2 ){
		if (linkPath === "votes" ){
			return " active";
		}
	}
	return "";
};

const toPath = (currentLocation) => {
  const locationElements = currentLocation.split('/');
  return `${locationElements[0]}/${locationElements[1]}`;
};

export const AnswerNavDisplay = ({currentLocation}) => {  //newest, active, featured, frequent
  return (
		<div className="tabs">
			<Link to={`${toPath(currentLocation)}/active`} className={`tab${activeLink({currentLocation:currentLocation, linkPath: "active"})}`}>active</Link>
			<Link to={`${toPath(currentLocation)}/oldest`} className={`tab${activeLink({currentLocation:currentLocation, linkPath: "oldest"})}`}>oldest</Link>
			<Link to={`${toPath(currentLocation)}/votes`} className={`tab${activeLink({currentLocation:currentLocation, linkPath: "votes"})}`}>votes</Link>
		</div>
	);
};
