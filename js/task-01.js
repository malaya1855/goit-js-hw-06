const numbersOfCategories = document.querySelector('#categories')
console.log(`Number of categories: ${numbersOfCategories.children.length}`);
const nameOfCategories = document.querySelectorAll('.item');

nameOfCategories.forEach(name => {
    const item = name.firstElementChild;
    console.log(`Category: ${item.textContent}`)
    const element = name.lastElementChild;
    console.log(`Elements: ${element.children.length}`)
})
