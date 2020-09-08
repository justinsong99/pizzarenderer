import React from 'react';
import IngredientCard from './IngredientCard';
import IngredientSearchBar from './IngredientSearchBar';
import imageLoader from './images';

import './css/IngredientList.css';

class IngredientList extends React.Component {
	state = { ingredients: [], searchTerm: '' };

	componentDidMount() {
		const ingredients = imageLoader;
		this.setState({ ingredients });
	}

	onSearchSubmit = async (term) => {
		var ingredients = imageLoader;
		const findIngredient = (element) => {
			return ingredients.filter(item => {
				return item.text === element
			})
		};

		ingredients = findIngredient(term);
		if (ingredients && ingredients.length > 0) {
			this.setState({ ingredients });
		} 
		
	}

	handleChange = async (term) => {
		var ingredients = imageLoader;
		const findIngredient = (element) => {
			return ingredients.filter(item => item.text.toLowerCase().includes(element.toLowerCase()))
		};
		if(term.length===1) {
			const ingredients = imageLoader;
			this.setState({ ingredients });
		} else {
			ingredients = findIngredient(term);
			this.setState({ingredients});
		}
	}

	render() {
		return (
			<div className="container2">
				<IngredientSearchBar onSubmit={this.onSearchSubmit} onChange={this.handleChange}/>
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