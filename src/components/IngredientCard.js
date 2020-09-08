import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import './IngredientCard';
import './css/Ingredients.css';
	

const IngredientCard = (props) => {
	return (

		<Card className="styling">
			<img className='img-styling' src={props.ingredient} alt="icon"/>
		</Card>
	);
};

export default IngredientCard;