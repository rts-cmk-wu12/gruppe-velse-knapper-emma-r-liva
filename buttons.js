const buttonBackgroundChange = document.querySelector('#button-background-change');
const body = document.body;

buttonBackgroundChange.addEventListener('click', backgroundChange)

function backgroundChange(){
    body.style.backgroundColor = 'hotpink';
}

/* --- */

const buttonAlert = document.querySelector('#button-alert');

buttonAlert.addEventListener('click', showAlert);

function showAlert(){
    alert('Hello World')
}

/* --- */

const buttonFontChange = document.querySelector('#button-font-change')

buttonFontChange.addEventListener('click', changeFont);

function changeFont() {
    document.body.style.fontFamily = 'sans-serif'
}

/* --- */

const buttonSizeChange = document.querySelector('#button-size-change')

buttonSizeChange.addEventListener('click', changeSize);

function changeSize() {
    document.body.style.fontSize = '5em'
}

/* --- */

const buttonColourChange = document.querySelector('#button-colour-change')

buttonColourChange.addEventListener('click', changeColour);

function changeColour() {
    document.body.style.color = 'lightgreen'
}

/* --- */

const buttonChangeHeading = document.querySelector('#button-change-heading')
const headingElement = document.querySelector('h1')

buttonChangeHeading.addEventListener('click', changeHeading);

function changeHeading() {
    headingElement.style.writingMode = 'vertical-lr'
}

/* --- */

const buttonChangeText = document.querySelector('#button-change-text')

buttonChangeText.addEventListener('click', changeText);

function changeText() {
    buttonChangeText.innerHTML = "Nu ved jeg det!"
}

/* --- */

const buttonSkewText = document.querySelector('#button-skew-text')

buttonSkewText.addEventListener('click', skewText);

function skewText() {
    document.body.style.transform = 'skew(45deg)'
}

/* --- */

const buttonShowImg = document.querySelector('#button-show-image')
const supriseImg = document.querySelector('#cat-img')

buttonShowImg.addEventListener('click', showImg);

function showImg() {
    supriseImg.style.display = 'inline-block'
}

/* --- */

const buttonChangePlace = document.querySelector('#button-change-place')

buttonChangePlace.addEventListener('click', changePlace);

function changePlace() {
    buttonChangePlace.style.transform = 'translateX(80rem)'
    buttonChangePlace.innerHTML = "you're too slow"
}

/* --- */

const buttonScaleDown = document.querySelector('#button-scale-down')
const mainElement = document.querySelector('main')

buttonScaleDown.addEventListener('click', scaleDown);

function scaleDown() {
    mainElement.style.transform = 'scale(0.2)'
    buttonScaleDown.innerHTML = 'Kan du stadig nu?'
}

/* --- */

const buttonBodySmall = document.querySelector('#button-body-small')

buttonBodySmall.addEventListener('click', bodySmall);

function bodySmall() {
    document.body.style.width = '5rem'
}

/* --- */

const buttonRotate = document.querySelector('#button-rotate')

buttonRotate.addEventListener('click', rotateBtn);

function rotateBtn() {
    buttonRotate.style.transform = 'rotate(150deg)'
}

/* --- */

const buttonNumber = document.querySelector('#button-number');
const number = document.querySelector('#number');

buttonNumber.addEventListener('click', getNumber);

function getNumber() {
    number.innerHTML = 1*Math.floor(Math.random()*10)
}

/* --- */

const buttonHide = document.querySelector('#button-hide')

buttonHide.addEventListener('click', hideIt);

function hideIt() {
    document.body.style.display = 'none'
}