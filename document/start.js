"This is the beginning of the second chapter of the modern javascript book"
console.log('CHAPTER TWO')

"when javascript runs in a web browser, the root object is the window"
console.log(window.innerHeight)
console.log(location.href)
console.log(navigator.userAgent)

document.body.style.background = 'red'
document.body.style.color = 'white'
setTimeout(() => {
    document.body.style.background = '',
    document.body.style.color = "black"
}, 5000)

let chapter = document.querySelector('.chapter')
console.log(chapter.closest('.book'))
let class_ = document.querySelector('.lists')
console.log(class_.closest('.class'))

console.log(chapter.constructor.name)
console.log(document.body.children[0].nodeType)

"outer html is like inner html but outer html also inculdes the tags  and other properties eg classes and ids of the element as well as the string content. Note that writing to outer html doesn not change the element but instead replaces the DOM"

let divv = document.querySelector('.divv')
divv.innerHTML = 'This is a simple div'
console.log(divv.outerHTML)
let elem = document.querySelector('.elem')
setInterval(() => elem.hidden = !elem.hidden, 1000)

// DOM nodes are regular JS objects and properties and methods can be added to them as we see below
document.body.sayTagName = function(){
    return this.tagName
}

chapter.sayTagName = function(){
    return this.tagName
}

console.log(chapter.sayTagName())

Element.prototype.sayTag = function() {
    return `Hello, I'm ${this.tagName}, yoroshokun onegaishimas`;
};

console.log(document.documentElement.sayTag());

//console.log(chapter.getAttribute('name'))
//console.log(chapter.hasAttribute('id'))
chapter.setAttribute('id', 'class-one')
//chapter.removeAttribute('id')

for(let att of chapter.attributes){
    console.log(att)
}

let menu = document.getElementById('menu')
console.log(menu.dataset.widgetName)

let link = document.querySelector('a')
link.style.color='orange'
ol.before('before')
let newLi = document.createElement('li')
let lastli = document.createElement('li')
newLi.innerHTML = 'Append o'
lastli.innerHTML = 'break my heart'
ol.append(newLi)
ol.prepend(lastli)


"The insertAdjacentElement is used to add elements to the dom relative to a specified element and has 4 variations: beforebegin, afterbegin, beforeend, afterend, quite self explanatory. A good example is given below"

// This method has two brothers, insertAdjacentHTML and insertAdjacentText
let h2 = document.createElement('h2')
h2.textContent = "this is a simple h2 tag"
h2.style.textTransform = 'uppercase'
let div = document.querySelector('.divv')
div.insertAdjacentElement('beforebegin', h2)
document.body.children[0].insertAdjacentHTML("afterend", `<div class="alert"><strong>Hi there!</strong> You've read an important message.</div>`);

let dive = document.createElement('div')
dive.className = 'alert'
dive.innerHTML = "<strong>Hi there! </strong> You've read an important message";

document.body.append(dive)

setTimeout(() => dive.remove(), 1000)

let div2 = dive.cloneNode(true)
div2.querySelector('strong').innerHTML = "bye there"
document.body.append(div2)

