let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',onClick);
});

let screen = document.querySelector('.screen');

let value = '';

console.log(eval('10.5 * 10'))
function onClick(event){
    //console.log(event.target.innerText);
    if (!event.target.classList.contains('clear')  && event.target.innerText !== '=') {
        if ((value === '' && ['-', '+','*', '/'].includes(event.target.innerText)) || (['-', '+','*', '/'].includes(event.target.innerText) && ['-', '+','*', '/'].includes(value[value.length-1]))) {
            return;
        }
        if (event.target.innerText === "." && value.split("").includes(".")) {
            return;
        }
        value = value + event.target.innerText;
		screen.innerText = value;
    } else {   
        if (event.target.classList.contains('clear')){
            value = '';
			screen.innerText = '';
        } else {
            value = eval(value);
            screen.innerText = value;
        }
    }
}
