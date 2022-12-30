const OPTIONS = {
	colors: 6,
	threshold: 255
}

const EXOCARP = {
	position    : 'absolute',
	width       : '100%',
	height      : '5%',
    bottom: 0,
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

const LOGO = {
    background: 'rgba(0, 0, 0, 0.9)',
    color: '#fff',
    position: 'absolute',
    transform: 'translateY(-50%)',
    top: '50%',
    left: '10px',
    'z-index': '99999',
    'text-decoration': 'none',
    padding: '5px',
    cursor: 'move',
    'font-weight': 'bold',
    'font-size': '16px',
    'font-family': 'Courier, Arial'
};

export {
    OPTIONS,
    EXOCARP,
    MESOCARP,
    LOGO 
}
