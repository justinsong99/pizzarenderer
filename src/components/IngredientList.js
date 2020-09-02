import React from 'react';
import IngredientCard from './IngredientCard';

import './css/IngredientList.css';

import cheese from '../res/cheese.png';
import pineapple from '../res/pineapple.png';
import tomato from '../res/tomato.png';

class IngredientList extends React.Component {
	render() {
		return (
			<div className="container2">
				<div className="list-styling">
					<IngredientCard ingredient={cheese} />
					<IngredientCard ingredient={pineapple}/>
					<IngredientCard ingredient={tomato} />
					<IngredientCard ingredient={cheese} />
					<IngredientCard ingredient={pineapple}/>
					<IngredientCard ingredient={tomato} />
				</div>
			</div>	
		);
	}
	
}

export default IngredientList;