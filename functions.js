import { OPTIONS } from './constants'

const toStyle = (obj) => {
	let _html = '';
	for( var key in obj ){
		if( obj.hasOwnProperty( key ) ){
			_html += `${key}:${obj[key]};`;
		}
	}
	return _html;
};

const colorGen = () => {
	const randomColor = (num) => num + (Math.floor(Math.random() * OPTIONS.threshold));
	const r = randomColor(50);
	const g = randomColor(50);
	const b = randomColor(50);

	return `rgb(${r}, ${g}, ${b})`;
}

export {
    toStyle,
    colorGen
}
