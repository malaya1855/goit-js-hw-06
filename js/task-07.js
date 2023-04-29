const rangeInput = document.querySelector('#font-size-control')
const rangeText = document.querySelector('#text')


const onTextChange = event =>
rangeText.style.fontSize = Number(event.currentTarget.value) + 'px';

rangeInput.addEventListener('input', onTextChange)