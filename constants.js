const GLOBAL = {
    'font-family': 'monospace' 
}
const OPTIONS = {
	colors: 6,
	threshold: 255
}

const EXOCARP = {
	position    : 'absolute',
	width       : '100%',
	height      : '100%',
    bottom: 0,
	'z-index'   : 99995
}

const MESOCARP = {
	display         : 'inline-block',
	position        : 'relative',
	'margin-bottom' : '-5px',
	height          : '100%',
	width           : `${OPTIONS.size}%`,
	transition      : 'all .3s ease',
    cursor: 'crosshair',
}

const HEXCSS = {
    background: 'rgba(0, 0, 0, 1)',
    color: '#fff',
    position: 'absolute',
    padding: '5px',
    top: 0,
    left: 0,
    'z-index': '99996',
    'font-weight': 'bold',
    'font-size': '16px',
    ...GLOBAL
};

const HOTKEYS = {
    background: 'rgba(0, 0, 0, 0.9)',
    color: '#fff',
    position: 'absolute',
    bottom: '20px',
    'z-index': '99999',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '5px',
    cursor: 'crosshair',
    'font-weight': 'bold',
    'font-size': '16px',
    ...GLOBAL
}

const BOOKMARK = {
    background: 'rgba(0, 0, 0, 0.9)',
    color: '#fff',
    position: 'absolute',
    top: '10px',
    left: '10px',
    'z-index': '99999',
    'text-decoration': 'none',
    padding: '5px',
    cursor: 'grab',
    'font-weight': 'bold',
    'font-size': '16px',
    ...GLOBAL
}

export {
    OPTIONS,
    EXOCARP,
    MESOCARP,
    HEXCSS,
    HOTKEYS,
    BOOKMARK
}
