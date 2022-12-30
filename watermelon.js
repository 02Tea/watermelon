import './style.css'
import { OPTIONS, EXOCARP, MESOCARP, LOGO } from './constants.js'
import { toStyle, colorGen } from './functions.js'

export function Watermelon(props) {
    const palette = document.createElement('div');
    const logo = document.createElement('a');
    
    // Render the palette
    const paletteGen = () => {
        const paletteExist = document.querySelectorAll('.mesocarp');
        if (paletteExist.length > 0) 
            for (let element of paletteExist)
                element.remove();
        

        //if (isExocarpExist) isExocarpExist.remove();
        
        console.log('ran paletteGen');
        palette.setAttribute('id', 'exocarp');
        palette.setAttribute('style', toStyle(EXOCARP));

        for (let i = 0; i < OPTIONS.colors; i++) {
            const colors = document.createElement('div');
            const cg = colorGen();
            MESOCARP['background-color'] = cg;
            MESOCARP['width'] = `${100/OPTIONS.colors}%`;
            colors.setAttribute('class', 'mesocarp');
            colors.setAttribute('style', toStyle(MESOCARP));

            palette.prepend(colors);
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

