import { OPTIONS, MESOCARP } from './constants'

const colorGen = () => {
	const randomColor = (num) => num + (Math.floor(Math.random() * OPTIONS.threshold));
	const r = randomColor(50);
	const g = randomColor(50);
	const b = randomColor(50);

	return `rgb(${r}, ${g}, ${b})`;
}

const createColor = () => {
    const color = document.createElement('div');

    MESOCARP['background-color'] = colorGen();
    MESOCARP['width'] = `${100/OPTIONS.colors}%`;

    color.setAttribute('class', 'mesocarp');
    Object.assign(color.style, MESOCARP);

    return color;
}

const rgbToHex = (r, g, b) => {
    const rgb = b | (g << 8) | (r << 16);

    return `#${(0x1000000 + rgb).toString(16).slice(1)}`;
};

const rgbToArray = (rgb) => {
    return rgb.substring(4, rgb.length-1)
                .replace(/ /g, '')
                .split(',');
};

export {
    colorGen,
    createColor,
    rgbToHex,
    rgbToArray
}
