import React from 'react';

class IngredientSearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = event => {
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	}

	handleChange=(event) => {
		this.props.onChange(this.state.term);
		this.setState({term: event.target.value});
	}

	render() {

		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Ingredient Search</label>
						<input
							type="text"
							value={this.state.term} 
							onChange={this.handleChange}
						/>
					</div>
				</form>	
			</div>
		)
	}
}

export default IngredientSearchBar;