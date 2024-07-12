const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {

const title = item.querySelector('.item-name').textContent;

const elements = item.querySelectorAll('.items-name').length;

console.log(`Category: ${title}`);
console.log(`Elements: ${elements}`);
});