const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
ingredients.forEach(
  ingredient => {
  const name = document.createElement('li');
  name.classList.add('item')
  name.textContent = ingredient;
  list.appendChild(name)})