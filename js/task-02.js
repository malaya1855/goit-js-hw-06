const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')

const newIngredient = ingredients.map (
  ingredient => {
    const name = document.createElement('li');
  name.classList.add('item');
  name.textContent = ingredient;
  return name
  }
)
list.append(...newIngredient)
