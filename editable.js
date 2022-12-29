export function setupEditable (element) {
    // create a function that will set new value to element
    const updateEditable = (value) => {
        element.value = value;
    }
    
    const eventHandler = event => {
        if (event.code === 'Enter') {
            updateEditable(event.target.value);
        }

        console.log('event ', event);
    }

    // detect enter keypress
    element.addEventListener("keydown", eventHandler, false);
}
