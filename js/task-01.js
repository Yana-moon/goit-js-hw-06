const numOfCat = document.querySelectorAll(".item");
console.log("Number of categories: ", numOfCat.length);
numOfCat.forEach((child) => {
console.log("Category:", child.querySelector("h2").textContent);
console.log("Elements: ", child.querySelectorAll("li").length);
});