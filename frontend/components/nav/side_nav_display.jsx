import React from 'react';
import { Link, withRouter } from 'react-router';

const QuestionsCount = (questions) => {
	if (questions === null){
		return (
			<div className="QuestionsCount"></div>
		);
	}
	return (
		<div className="QuestionsCount">
			<h2>{questions.length}</h2>
			<p>questions</p>
		</div>
	);
}

export const SideNavDisplay = ({questions}) => {  //newest, active, featured, frequent
	debugger
	return (
		<div className={ questions ? "sub-header-content side" : "sub-header-content"}>
			{QuestionsCount(questions)}
      <Link to="/ask" className='submit'>Ask Question</Link>

		</div>

	);
}
