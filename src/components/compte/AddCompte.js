import React, { Component } from 'react';

class AddCompte extends Component {
	render() {
		return (
			<div className="compte">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h5 className="display-4 text-center">Formulaire Creation / Edition Compte</h5>
							<hr />
							<form>
								<div class="form-group">
									<select class="form-control form-control-lg" name="type">
										<option value={0}>Selectionner Type</option>
										<option value={1}>Courant</option>
										<option value={2}>Epargne</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="text"
										className="form-control form-control-lg "
										placeholder="Solde du compte"
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="Numéro du compte"
										disabled
									/>
								</div>
								{
									// <!-- disabled for Edit Only!! remove "disabled" for the Create operation -->
								}

								<h6>Date ouverture</h6>
								<div className="form-group">
									<input type="date" className="form-control form-control-lg" name="open_date" />
								</div>

								<input type="submit" className="btn btn-primary btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddCompte;
