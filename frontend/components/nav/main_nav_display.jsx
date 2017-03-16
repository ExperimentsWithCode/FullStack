import React from 'react';
import { Link, withRouter } from 'react-router';

const posLocations = ['active', 'newest']

const activeLink = ({currentLocation, linkPath}) => {
	let clSplit = currentLocation.split("/")
	let reducedLocation = clSplit[clSplit.length-1]
	if (linkPath === reducedLocation){
		return " active";
	} else if ("" === reducedLocation){
		if (linkPath === "newest" ){
			return " active";
		}
	} else if (!posLocations.includes(reducedLocation)){

		if (linkPath === "newest" ){
			return " active";
		}
	}
	return "";
}

const currentLocationReudcer = (currentLocation) => {
	let clSplit = currentLocation.split("/")
	let reducedLocation = ""
	if (clSplit.length === 1) reducedLocation = "";
	else if (clSplit.length === 2) reducedLocation = currentLocation;
	else if (clSplit.length === 3) reducedLocation = `${clSplit[0]}/${clSplit[1]}`;
	return reducedLocation
}


export const MainNavDisplay = ({currentLocation}) => {  //newest, active, featured, frequent
	let reducedLocation = currentLocationReudcer(currentLocation)
	return (
		<div className="tabs">
			<Link to={`${reducedLocation}/newest`}className={`tab${activeLink({currentLocation:currentLocation, linkPath: "newest"})}`}>newest</Link>
			<Link to={`${reducedLocation}/active`} className={`tab${activeLink({currentLocation:currentLocation, linkPath: "active"})}`}>active</Link>
		</div>
	);
}

// Add back once functionality is added
	// Needs Views Tracked
	// <Link to="frequent" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "frequent"})}`}>frequent</Link>

	// Needs votes on questions
	// <Link to="votes" className={`tab${activeLink({currentLocation:currentLocation, linkPath: "votes"})}`}>votes</Link>
