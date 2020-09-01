import React from 'react';
import cheese from '../res/cheese.png';
import './IngredientCard';


class IngredientCard extends React.Component {
	render() {
		return (
			<div class="ui card">
				<a class="image" href="#">
					<img src={cheese} alt="Cheese" />
				</a>
			</div>
		);
	}
}

export default IngredientCard;