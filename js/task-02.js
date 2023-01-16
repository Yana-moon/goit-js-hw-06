const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const arrEl = ingredients.map(ing => {
  const ingrEl = document.createElement('li');
  ingrEl.textContent = `${ing}`;
  ingrEl.classList.add('item');
  return ingrEl;
});
list.append(...arrEl);
console.log(list);