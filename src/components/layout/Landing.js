import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Landing extends Component {
	componentDidMount() {
		if (this.props.security.validToken) {
			this.props.history.push('/dashboard');
		}
	}
	render() {
		return (
			<div className="landing">
				<div className="light-overlay landing-inner text-dark">
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center">
								<h1 className="display-3 mb-4">Gestion de Compte Bancaire</h1>
								<p className="lead">Créer un compte afin de pouvoir acceder à l'application</p>
								<hr />
								<Link to="/register" className="btn btn-lg btn-primary mr-2">
									Nouvel Utilisateur
								</Link>
								<Link to="/login" className="btn btn-lg btn-secondary mr-2">
									Login
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Landing.propTypes = {
	security: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	security: state.security
});
export default connect(mapStateToProps)(Landing);
