// 1. Create the category structure if it doesn't exist in the game UI layout
if (!elementCategories.includes("metals")) {
    elementCategories.push("metals");
}

// 2. Define the tab display properties
elementCategories["metals"] = {
    name: "Metals",
    color: "#4a5d4e",
};

// 3. Add Iron
elements.iron = {
    name: "Iron",
    color: "#71797E",
    behavior: behaviors.WALL,
    category: "metals",
    density: 7874,
    temp: 20,
    tempHigh: 1538,
    stateHigh: "molten_iron",
};

// 4. Add Molten Iron
elements.molten_iron = {
    name: "Molten Iron",
    color: "#ff4500",
    behavior: behaviors.LIQUID,
    category: "metals",
    density: 6980,
    temp: 1600,
    tempLow: 1538,
    stateLow: "iron",
    fireColor: "#ff4500",
};

// 5. Force Sandboxels to rebuild the UI categories so the new tab renders
if (typeof repric === "function" || typeof buildcategory === "function" || document.getElementById("categories")) {
    // Triggers a UI refresh if the game functions are exposed, 
    // otherwise relies on the standard reload.
    try {
        let catDiv = document.getElementById("categories");
        if (catDiv) {
            // Re-initializes category buttons if elements are loaded dynamically
            location.reload(); 
        }
    } catch (e) {}
}
