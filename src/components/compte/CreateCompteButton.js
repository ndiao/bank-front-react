import React from 'react';
import { Link } from 'react-router-dom';

const CreateCompteButton = () => {
	return (
		<React.Fragment>
			<Link to="/addCompte" className="btn btn-lg btn-info">
				Nouveau Compte
			</Link>
		</React.Fragment>
	);
};

export default CreateCompteButton;
