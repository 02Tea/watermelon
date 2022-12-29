import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { setupEditable } from './editable.js'

const OPTIONS = {
	colors: 6,
	threshold: 255
}
const EXOCARP = {
	position    : 'absolute',
	width       : '100%',
	height      : '100%',
	'z-index'   : 99995
}
const MESOCARP = {
	display         : 'inline-block',
	position        : 'relative',
	'margin-bottom' : '-5px',
	height          : '100%',
	width           : `${OPTIONS.size}%`,
	transition      : 'all .3s ease'	
}
const toStyle = ( obj ) => {
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

const palette = document.createElement('div');
palette.setAttribute('id', 'exocarp');
palette.setAttribute('style', toStyle(EXOCARP));
document.body.prepend(palette);

for (let i = 0; i < OPTIONS.colors; i++) {
	const colors = document.createElement('div');
	const cg = colorGen();
	MESOCARP['background-color'] = cg;
	MESOCARP['width'] = `${100/OPTIONS.colors}%`;
    colors.setAttribute('class', 'mesocarp');
    colors.setAttribute('style', toStyle(MESOCARP));

    palette.prepend(colors);
}


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello <input id="editable" type="text" value="Vite!"></h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
setupEditable(document.querySelector('#editable'))
