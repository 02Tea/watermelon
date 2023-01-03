import './style.css'
import { OPTIONS, EXOCARP, MESOCARP, LOGO } from './constants.js'
import { toStyle, colorGen } from './functions.js'

export function watermelonRender(props) {
    function createColor() {
        const color = document.createElement('div');

        MESOCARP['background-color'] = colorGen();
        MESOCARP['width'] = `${100/OPTIONS.colors}%`;

        color.setAttribute('class', 'mesocarp');
        color.setAttribute('style', toStyle(MESOCARP));

        return color;
    }

    // Render the palette
    function paletteGen() {
        const palette = document.createElement('div');

        // Remove existing palette color containers
        const paletteExist = document.querySelectorAll('.mesocarp');
        if (paletteExist.length > 0) 
            for (let element of paletteExist)
                element.remove();
        
        palette.setAttribute('id', 'exocarp');
        palette.setAttribute('style', toStyle(EXOCARP));
        
        for (let i = 0; i < OPTIONS.colors; i++) {
            const newColor = createColor();
            palette.prepend(newColor);
        }

        return palette;
    }

    // Logo
    function logoGen() {
        const logo = document.createElement('a');

        logo.textContent = "watermelon";
        logo.setAttribute('style', toStyle(LOGO));

        return logo;
    }
    
    function render() {
        // Keypress checks
        document.body.addEventListener("keydown", (event) => {
            switch(event.key) {
                // reload
                case 'q': {
                    paletteGen();
                    break;
                }
            }    
        }, false);
        
        // Injecting to DOM
        const palette = paletteGen();
        const logo = logoGen();
        
        // add logo to palette area
        palette.prepend(logo);

        // add palette + logo to the DOM body
        document.body.prepend(palette);
    }

    render();
}
