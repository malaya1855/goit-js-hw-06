const colorBtn = document.querySelector('.change-color')
const outputColor = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
const onColorChange = () => {
        const randomColor = getRandomHexColor()
        document.body.style.backgroundColor = randomColor;
        outputColor.innerHTML = randomColor;
    }

    colorBtn.addEventListener('click', onColorChange)