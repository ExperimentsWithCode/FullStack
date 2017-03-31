import React from 'react';
import { Link, withRouter } from 'react-router';


export const BulletinDisplay = () => {
	return (
		<div className="bulletin">
			<div className="bulletin-title">Projects</div>
			<div className="bulletin-content">
				<ul className="bulletin-rows">
					<li>HeapSpill </li>
					<li> <a href="https://github.com/ExperimentsWithCode/HeapSpill">Github</a></li>
				</ul>
				<ul className="bulletin-rows">
					<li>Chess: The Game </li>
					<li> <a href="https://github.com/ExperimentsWithCode/ChessTheGame">Github</a></li>
				</ul>
				<ul className="bulletin-rows">
					<li>Dodgeball </li><li>
						<a href="http://www.meirgalimidi.com/doedgeball">Live</a>&nbsp;|&nbsp;
						<a href="https://github.com/ExperimentsWithCode/dodgeball">Github</a>
					</li>
				</ul>
			</div>
			<div className="bulletin-title">Relevant Links</div>
			<div className="bulletin-content">
				<ul className="bulletin-cols">
					<li><a href="http://www.meirgalimidi.com/">Portfolio</a></li>
					<li><a href="https://github.com/ExperimentsWithCode">Github</a></li>
					<li><a href="https://www.linkedin.com/in/meir-galimidi/">LinkedIn</a></li>
					<li><a href="http://stackoverflow.com/users/1810266/experimentswithcode">Stack Overflow</a></li>
				</ul>
			</div>
		</div>
	);
}
