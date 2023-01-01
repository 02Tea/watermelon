import './style.css'
import { OPTIONS, EXOCARP, MESOCARP, LOGO } from './constants.js'
import { toStyle, colorGen } from './functions.js'

export function Watermelon(props) {
    const palette = document.createElement('div');
    const logo = document.createElement('a');
    
    function createColor() {
        const color = document.createElement('div');

        MESOCARP['background-color'] = colorGen();
        MESOCARP['width'] = `${100/OPTIONS.colors}%`;

        color.setAttribute('class', 'mesocarp');
        color.setAttribute('style', toStyle(MESOCARP));

        return color;
    }

    // Render the palette
    const paletteGen = () => {
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
    }

    // Logo
    const logoGen = () => {
        logo.textContent = "watermelon";
        logo.setAttribute('style', toStyle(LOGO));
    }

    document.body.addEventListener("keydown", (event) => {
        switch(event.key) {
            // reload
            case 'q': {
                paletteGen();
                break;
            }
        }    
    }, false);
    
    
    const render = () => {
        paletteGen();
        logoGen();

        document.body.prepend(palette);
        palette.prepend(logo);
    }

    render();
}

