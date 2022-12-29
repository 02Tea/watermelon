export function setupCounter(element) {
    // create counter state
    let counter = 0

    // create a function that will declare the new value
    // of counter to the DOM or the element's innerHTML.
    const setCounter = (count) => {
        counter = count
        element.innerHTML = `count is ${counter}`
    }

    // this event will always trigger upon clicking 
    element.addEventListener('click', () => setCounter(counter + 1))

    // I don't know what's the use of this.
    setCounter(0)
}
