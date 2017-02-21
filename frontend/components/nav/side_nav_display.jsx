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
		<div className="sub-header-content side">
			<div className="QuestionsCount">
				<h2>{questions.length}</h2>
				<p>questions</p>
			</div>
      <Link to="/ask" className='submit'>Ask Question</Link>

		</div>

	);
}
