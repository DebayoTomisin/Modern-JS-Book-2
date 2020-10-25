let dive = document.createElement('div')
dive.className = 'alert'
dive.innerHTML = "<strong>Hi there! </strong> You've read an important message";
document.body.append(dive)

document.body.style.background = "red"
setTimeout(() => document.body.style.background = "", 3000)


let elem = document.querySelector('.elem')
setInterval(() => {
    elem.hidden = !elem.hidden
}, 1000);

function update(){
    let clock = document.getElementById('clock')
    let date = new Date()
    let hours = date.getHours()
    if(hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes()
    if(minutes < 10) minutes = '0' + minutes
    clock.children[1].innerHTML = minutes

    let seconds = date.getSeconds()
    if(seconds < 10) seconds = '0' + seconds
    clock.children[2].innerHTML = seconds
}

let timerid;
function clockStart(){
    timerid = setInterval(update, 1000);
    update()
}

function clockStop(){
    clearInterval(timerid)
    timerid = null
}


"One way to get the values of styled objects is getComputedstyle(element)"
let computedstyle = getComputedStyle(dive)
console.log(computedstyle.backgroundColor)

function showNotification({top, left}){
    let div = document.createElement('div')
    div.classList.add('notifications')
    div.style.top = top
    div.style.left = left;
    document.body.prepend(div)
    div.innerHTML = 'Hello'
}


"to measure the size of borders, the properties clientLeft and clientTop are used"
"clientHeight and clientWidth provide the size of the element inside the elements borders including width together with the paddings but without the scroll bar"

// here we will explore the various ways of scrolling through the document with javascript

"note that innerHeight/Width donot take into account the presence of a scroll bar if there is any, but clientHeight/width takes the scroll bar into consideration "

console.log(window.innerHeight)
console.log(document.documentElement.clientHeight)
console.log(document.documentElement.clientWidth)

"we can also get the current scroll of the page"
console.log('Current scroll from the top: ' + window.pageYOffset);
console.log('Current scroll from the left: ' + window.pageXOffset);

// next we move to coordinates
"most js methods deal with one of two coordinate systems. The first is the    1. relative to the window similar to position fixed. calculated from the window top/left edge. denoted by clientX/ clientY                           2. Relative to the document: similar to position: absolute, calculted from the document's top left edge, denoted as pageX/pageY."
