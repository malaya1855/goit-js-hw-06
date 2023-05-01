const number = document.querySelector('#controls input')
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxList = document.querySelector('#boxes')

createBtn.addEventListener ('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }

function createBoxes(amount) {
    amount = number.value
    let size = 20;
    const boxArray = [];
    for (let i = 0; i < amount; i += 1){
      size += 10;
      const box = document.createElement('div');
      box.style.width  = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxArray.push(box)
    }
    boxList.append(...boxArray)
  }
  
function destroyBoxes(){
    boxList.replaceChildren();
}
