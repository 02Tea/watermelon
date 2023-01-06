import './style.css'

import { 
    OPTIONS,
    EXOCARP,
    MESOCARP,
    HEXCSS,
    HOTKEYS,
    BOOKMARK
} from './constants.js'

import { 
    toStyle,
    colorGen,
    createColor,
    rgbToHex,
    rgbToArray
} from './functions.js'

export function watermelonRender() {
    function paletteGen() {
        const palette = document.createElement('div');
        const exocarp = document.querySelector('#exocarp');
        
        // Reset and remove existing 
        if(exocarp) exocarp.remove();
        
        // palette element attributes
        palette.setAttribute('id', 'exocarp');
        palette.setAttribute('style', toStyle(EXOCARP));

        document.body.prepend(palette);

        for (let i = 0; i < OPTIONS.colors; i++) {
            const newColor = createColor();
            palette.prepend(newColor);
        }
    }

    function updatePalette(event) {
        const removeLastChild = (lastChild, elements) => {
            if(elements.length > 1) {
                lastChild.remove();
                OPTIONS.colors--;
                paletteGen();
            }
        }

        switch(event) {
            case 'add': {
                const newColor = document.createElement('div');

                MESOCARP['background-color'] = colorGen();
                
                newColor.setAttribute('class', 'mesocarp');
                newColor.setAttribute('style', toStyle(MESOCARP));

                document.getElementById('exocarp').append(newColor);

                OPTIONS.colors++;
                
                paletteGen();
                
                break;
            }
            case 'delete': {
                const lastChild = document.querySelector('#exocarp').lastChild;
                const mesocarp = document.querySelectorAll('.mesocarp');

                removeLastChild(lastChild, mesocarp);
                
                break;
            }
        }
    }

    function mouseHex() {
        const hex = document.createElement('span');
        
        hex.setAttribute('id', 'hex');
        
        document.body.prepend(hex);
    }

    function hotkeys() {
        const hotkeys = document.createElement('div');
        const span = document.createElement('span');

        hotkeys.setAttribute('id', 'hotkeys');
        hotkeys.setAttribute('style', toStyle(HOTKEYS));

        span.textContent = '[q] Add - [w] Delete - [e] Reset';
        
        hotkeys.prepend(span);

        document.body.prepend(hotkeys);
    }

    async function bookmark() {
        const bookmark = document.createElement('a');

        bookmark.textContent = "watermelon";
        bookmark.setAttribute('style', toStyle(BOOKMARK));
        bookmark.setAttribute('data-tt', 'bookmark me');
        bookmark.setAttribute('href', 'javascript:const b={"font-family":"monospace"},d={colors:6,threshold:255},y={position:"absolute",width:"100%",height:"100%",bottom:0,"z-index":99995},m={display:"inline-block",position:"relative","margin-bottom":"-5px",height:"100%",width:`${d.size}%`,transition:"all .3s ease",cursor:"crosshair"},f={background:"rgba(0, 0, 0, 0.8)",color:"#fff",position:"absolute",padding:"5px","z-index":"99996","font-weight":"bold","font-size":"16px"},x={background:"rgba(0, 0, 0, 0.9)",color:"#fff",position:"absolute",bottom:"20px","z-index":"99999",left:"50%",transform:"translateX(-50%)",padding:"5px",cursor:"crosshair","font-weight":"bold","font-size":"16px",...b},k={background:"rgba(0, 0, 0, 0.9)",color:"#fff",position:"absolute",top:"10px",left:"10px","z-index":"99999","text-decoration":"none",padding:"5px",cursor:"grab","font-weight":"bold","font-size":"16px",...b},u=t=>{let r="";for(var i in t)t.hasOwnProperty(i)&&(r+=`${i}:${t[i]};`);return r},h=()=>{const t=o=>o+Math.floor(Math.random()*d.threshold),r=t(50),i=t(50),l=t(50);return`rgb(${r}, ${i}, ${l})`},A=()=>{const t=document.createElement("div");return m["background-color"]=h(),m.width=`${100/d.colors}%`,t.setAttribute("class","mesocarp"),t.setAttribute("style",u(m)),t},w=(t,r,i)=>`#${(16777216+(i|r<<8|t<<16)).toString(16).slice(1)}`,C=t=>t.substring(4,t.length-1).replace(/ /g,"").split(",");function S(){function t(){const e=document.createElement("div"),s=document.querySelector("#exocarp");s&&s.remove(),e.setAttribute("id","exocarp"),e.setAttribute("style",u(y)),document.body.prepend(e);for(let n=0;n<d.colors;n++){const a=A();e.prepend(a)}}function r(e){const s=(n,a)=>{a.length>1&&(n.remove(),d.colors--,t())};switch(e){case"add":{const n=document.createElement("div");m["background-color"]=h(),n.setAttribute("class","mesocarp"),n.setAttribute("style",u(m)),document.getElementById("exocarp").append(n),d.colors++,t();break}case"delete":{const n=document.querySelector("#exocarp").lastChild,a=document.querySelectorAll(".mesocarp");s(n,a);break}}}function i(){const e=document.createElement("span");e.setAttribute("id","hex"),document.body.prepend(e)}function l(){const e=document.createElement("div"),s=document.createElement("span");e.setAttribute("id","hotkeys"),e.setAttribute("style",u(x)),s.textContent="[q] Add - [w] Delete - [e] Reset",e.prepend(s),document.body.prepend(e)}async function o(){const e=document.createElement("a");e.textContent="watermelon",e.setAttribute("style",u(k)),e.setAttribute("data-tt","bookmark me"),e.setAttribute("href","javascript:"),document.body.prepend(e),document.body.setAttribute("style","overflow: hidden")}function c(){document.querySelectorAll("[data-tt]");const e=document.createElement("style");e.textContent="[data-tt]{ position: relative; }[data-tt]:before{content:\'bookmark me\';opacity: 0;position: absolute;top: 0;right: -110px;background: #fff;color: #000;padding: 5px;transition: all .2s cubic-bezier(1.000, 0.010, 0.000, 1.495);}[data-tt]:hover:before{opacity: 1;right: -125px;}",document.head.appendChild(e)}document.onkeydown=e=>{switch(e.key){case"q":{r("add");break}case"w":{r("delete");break}case"e":{d.colors=6,t();break}}},document.onmousemove=e=>{e=e||window.event;const s=e.clientX,n=e.clientY,g=document.elementFromPoint(s,n).style.backgroundColor.toString(16),p=document.querySelector("#hex");f.transform=`translate(${s}px,${n-530}px)`,p.setAttribute("style",u(f)),p.textContent=w(...C(g))},document.ondblclick=()=>{const e=document.querySelector("#hex"),s=document.createRange(),n=window.getSelection();n.removeAllRanges(),s.selectNode(e),n.addRange(s);try{document.execCommand("copy"),e.textContent="copied"}catch{console.log("Oops, unable to copy")}},l(),i(),o(),c(),t()}S();');
        document.body.prepend(bookmark);
        document.body.setAttribute('style', 'overflow: hidden');
    }

    function tooltip() {
        const element = document.querySelectorAll('[data-tt]');
        const tooltip = document.createElement('style');
        
        tooltip.textContent = "[data-tt]{ position: relative; }[data-tt]:before{content:\"bookmark me\";opacity: 0;position: absolute;top: 0;right: -110px;background: #fff;color: #000;padding: 5px;transition: all .2s cubic-bezier(1.000, 0.010, 0.000, 1.495);}[data-tt]:hover:before{opacity: 1;right: -125px;}";

        document.head.appendChild(tooltip);
    }
    
    // Events 
    document.onkeydown = (event) => {
        switch(event.key) {
            // reload
            case 'q': {
                updatePalette('add');
                break;
            }
            // add 
            case 'w': {
                updatePalette('delete');
                break;
            }
            // refresh
            case 'e': {
                OPTIONS.colors = 6;
                paletteGen();
                break;
            }
        }    
    }
    
    document.onmousemove = (event) => {
        event = event || window.event;
        const mx = event.clientX;
        const my = event.clientY;
        const mousePos = document.elementFromPoint(mx, my);
        const rgb = mousePos.style.backgroundColor.toString(16);
        const hex = document.querySelector('#hex');

        //HEXCSS['transform'] = `translate(${mx}px,${my}px)`;
        HEXCSS['transform'] = `translate(${mx}px,${(my-530)}px)`;
        hex.setAttribute('style', toStyle(HEXCSS));
        hex.textContent = rgbToHex(...rgbToArray(rgb)); 
    }

    document.ondblclick = () => {
        const hex = document.querySelector('#hex');
        const range = document.createRange();
        const selection = window.getSelection();

        selection.removeAllRanges(); 
        range.selectNode(hex);  
        selection.addRange(range);

        try {   
            document.execCommand('copy'); 
            hex.textContent = "copied";
        } catch(err) {  
            console.log('Oops, unable to copy');  
        }  
    }
    
    hotkeys();
    mouseHex();
    bookmark();
    tooltip();
    paletteGen();
}
