//setting up an array to hold the recipes
let recipes=[
    {
        name: "Lasagna",
        category: "Dinner",
        time: "45",
        link:  "https://pinchofyum.com/super-easy-one-pot-lasagna",
        image: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/One-Pot-Lasagna-2.jpg",
        rating: "5",
        comments: "This recipe is delicious!"
    },

    {
        name: "Alfredo Pasta",
        category: "Lunch",
        time: "30",
        link: "https://www.recipetineats.com/one-pot-chicken-alfredo-pasta/",
        image: "https://www.recipetineats.com/wp-content/uploads/2017/03/One-Pot-Chicken-Alfredo-2.jpg?resize=650,910",
        rating: "3",
        comments: "This recipe is too creamy. Next time add lesser cream."
    }
];

//function to display the recipe cards
function displayRecipeCards(){
    const recipeCardsContainer= document.getElementById("recipe-cards-container");
    recipeCardsContainer.innerHTML="";

    recipes.forEach((recipe, index)=>{
        const recipeCard= document.createElement("div");
        recipeCard.className="recipe-card";
        recipeCard.innerHTML=`
        <img src="${recipe.image}" alt="${recipe.name}">
         <h3>${recipe.name}</h3>

        <div class="star-rating">
            <span class="star${recipe.rating == 1 ? " filled" : ""}">&#9733;</span>
            <span class="star${recipe.rating == 2 ? " filled" : ""}">&#9733;</span>
            <span class="star${recipe.rating == 3 ? " filled" : ""}">&#9733;</span>
            <span class="star${recipe.rating == 4 ? " filled" : ""}">&#9733;</span>
            <span class="star${recipe.rating == 5 ? " filled" : ""}">&#9733;</span>
        </div>
        <p>${recipe.time} mins</p>
        <p>${recipe.category}</p>
        <button class="expand-btn">View Recipe</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
    `;

    recipeCardsContainer.appendChild(recipeCard);
});
}

//function to display the recipe cards

