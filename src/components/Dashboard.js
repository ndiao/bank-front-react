import React, { Component } from 'react';
import CompteItem from './compte/CompteItem';
import CreateCompteButton from './compte/CreateCompteButton';

class Dashboard extends Component {
	render() {
		return (
			<div className="projects">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="display-4 text-center">Compte Bancaire</h1>
							<br />
							<CreateCompteButton />
							<br />
							<hr />

							<CompteItem />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
