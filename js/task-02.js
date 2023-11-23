


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients')


ingredients.forEach((item) => {
  const htmlLi = `<li class="ingredients-list__item item" >
  <svg class="task-01__item-icon" width="24" height="24">
    <use href="./picture/sprite.svg#icon-StarSharp"></use>
</svg>
  <p class="subtitle">${item}</p>
</li>`

listIngredients.innerHTML += htmlLi
console.log(item)
});




// ingredients.forEach((item) => {
// const li = document.createElement("li"); //создаем тег ли
// li.classList.add('item'); // создаем в ли клас итем


// const listText = document.createTextNode(item); // создаем текстовый узел
// li.appendChild(listText); // добавляем в элемент h1 текстовый узел
// listIngredients.appendChild(li)
// });






