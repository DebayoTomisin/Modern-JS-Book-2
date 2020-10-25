console.log('Welcome to the chapter on events')
function handler1(){
    console.log('Thanks')
}

function handler2(){
    console.log('Thanks again')
}
elem.onclick = () => alert("Hello");
elem.addEventListener("click", handler1);
elem.addEventListener("click", handler2);

let button = document.querySelector('.button')

button.onclick = function(event) {
    // show event type, element andcoordinates of the click
    console.log(event.type + " at " +
    event.currentTarget);
    console.log("Coordinates: " + event.clientX +":" + event.clientY);
};

let click = document.querySelector('#button2');

class Menu{
    handleEvent(event){
        switch(event.type){
            case 'mousedown':
                click.innerHTML = 'Mouse button pressed'
                break
            case 'mouseup':
                click.innerHTML = '... and released'
                break
        }
    }
}

let menu = new Menu();
click.addEventListener('mousedown', menu);
click.addEventListener('mouseup', menu);

