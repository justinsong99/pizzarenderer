import cheese from '../res/cheese.png';
import pineapple from '../res/pineapple.png';
import tomato from '../res/tomato.png';

const images = [
	{ id: 1, name: cheese, text: 'cheese'},
	{ id: 2, name: pineapple, text: 'pineapple'},
	{ id: 3, name: tomato, text: 'tomato'}
];

function imageLoader() {
	return images;
}

export default images;