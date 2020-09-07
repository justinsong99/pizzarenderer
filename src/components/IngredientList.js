import React from 'react';
import IngredientCard from './IngredientCard';
import IngredientSearchBar from './IngredientSearchBar';

import './css/IngredientList.css';

import cheese from '../res/cheese.png';
import pineapple from '../res/pineapple.png';
import tomato from '../res/tomato.png';

class IngredientList extends React.Component {
	constructor(props) {
		super(props);

		this.state = { ingredients: [{"name":cheese}, {"name":pineapple}, {"name":tomato}] }	
	}

	onSearchSubmit = async (term) => {
		if (term === "cheese") {
			term = cheese;
		} else if (term === "tomato") {
			term = tomato;
		} else if (term === "pineapple") {
			term = pineapple;
		}
		
		//Empty string so empty field when onSubmit was triggered
		if(term === "") {
			//We set state to the default list of ingredients
			this.setState({ ingredients: [{"name":cheese}, {"name":pineapple}, {"name":tomato}] });
		} else {
			this.setState({ ingredients: [{"name": term}] });
		}
	}

	render() {
		return (
			<div className="container2">
				<IngredientSearchBar onSubmit={this.onSearchSubmit}/>
				<div className="list-styling">
					{this.state.ingredients.map((d, idx) =>
						<IngredientCard
							ingredient={d.name}
							key={idx}
						/>
					)}
				</div>
			</div>	
		);
	}
	
}

export default IngredientList;