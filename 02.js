const nameproduct = document.querySelectorAll(".as-imagegrid-item-title");
const array = [];
nameproduct.forEach((e) => {
  array.push(e.innerText);
});
