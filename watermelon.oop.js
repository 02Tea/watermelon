import './style.css'
import { OPTIONS, EXOCARP, MESOCARP, LOGO } from './constants.js'
import { toStyle, colorGen } from './functions.js'

class Watermelon {
    static palette = this.create('div');

    static logo = this.create('a');
    
    static create(element) {
        return document.createElement(element);
    }

    static createColor() {
        const color = this.create('div');
        MESOCARP['background-color'] = colorGen();
        MESOCARP['width'] = `${100/OPTIONS.colors}%`;

        color.setAttribute('class', 'mesocarp');
        color.setAttribute('style', toStyle(MESOCARP));

        return color;
    }

    static paletteGen() {
        const paletteExist = document.querySelectorAll('.mesocarp');
        if (paletteExist.length > 0) 
            for (let element of paletteExist)
                element.remove();
        
        this.palette.setAttribute('id', 'exocarp');
        this.palette.setAttribute('style', toStyle(EXOCARP));
        
        for (let i = 0; i < OPTIONS.colors; i++) {
            const newColor = this.createColor();
            this.palette.prepend(newColor);
        }
    }

    static logoGen() {
        this.logo.textContent = "watermelon";
        this.logo.setAttribute('style', toStyle(LOGO));
    }

    static render() {
        document.body.addEventListener("keydown", (event) => {
            switch(event.key) {
                // reload
                case 'q': {
                    this.paletteGen();
                    break;
                }
            }    
        }, false);

        this.paletteGen();
        this.logoGen();

        document.body.prepend(this.palette);
        this.palette.prepend(this.logo);
    } 
}

export { Watermelon }
