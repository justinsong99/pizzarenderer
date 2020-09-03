import React from 'react';
import IngredientCard from './IngredientCard';

import './css/IngredientList.css';

import cheese from '../res/cheese.png';
import pineapple from '../res/pineapple.png';
import tomato from '../res/tomato.png';

class IngredientList extends React.Component {
	render() {
		const arrayOfIngredients = [{"name":cheese}, {"name":pineapple}, {"name":tomato}];
		return (
			<div className="container2">
				<form className="ui form">
					<input type="text" />
				</form>	
				<div className="list-styling">
					{arrayOfIngredients.map((d, idx) =>
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