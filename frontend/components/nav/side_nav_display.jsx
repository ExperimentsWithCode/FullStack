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

export const SideNavDisplay = ({questions}) => {  //newest, active, featured, frequent
	return (
		<div className="tabs">
			<Link to="active" className={`tab`}>Side Nav!</Link>
		</div>
	);
}
