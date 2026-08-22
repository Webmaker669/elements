function createElementButton(element) {
    ...
    var categoryDiv = document.getElementById("category-"+elements[element].category);
    if (categoryDiv === null) {
        createCategoryDiv(elements[element].category);
        categoryDiv = document.getElementById("category-"+elements[element].category);
        categoryDiv.style.display = "none";
    }
    categoryDiv.appendChild(button);
}

function createCategoryDiv(category) {
    categoryButton = document.createElement("button");
    categoryButton.id = "categoryButton-"+category;
    categoryButton.innerText = (lang[category] || category)...title-cased...
    categoryButton.className = "categoryButton";
    categoryButton.setAttribute("category",category);
    ...
    document.getElementById("categoryControls").appendChild(categoryButton);
    var categoryDiv = document.createElement("div");
    categoryDiv.setAttribute("id","category-"+category);
    ...
    document.getElementById("elementControls").appendChild(categoryDiv);
}
