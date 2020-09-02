import React from 'react';
import IngredientList from './IngredientList';

import './css/App.css';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<IngredientList />
			</div>
		);
	}
}

export default App;