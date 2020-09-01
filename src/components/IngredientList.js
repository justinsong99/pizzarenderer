import React from 'react';
import IngredientCard from './IngredientCard';


import cheese from '../res/cheese.png';
import pineapple from '../res/pineapple.png';
import tomato from '../res/tomato.png';

class IngredientList extends React.Component {
	render() {
		return (
			<div>
				<IngredientCard ingredient={cheese} />
				<IngredientCard ingredient={pineapple}/>
				<IngredientCard ingredient={tomato} />
			</div>
		);
	}
	
}

export default IngredientList;