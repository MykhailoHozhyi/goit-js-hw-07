const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('.item h2');
  console.log(`Category: ${title.textContent}`);

  const elements = category.querySelectorAll('.item li');
  console.log(`Elements: ${elements.length}`);
});
