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

//function to display the recipe details
function displayRecipeDetails (index){
    const recipe= recipes[index];
    const recipeDetailsContainer= getElementById("recipe-details-container");
    const recipeName= document.getElementById("recipe-name");
    const recipeCategory= document.getElementById("recipe-category");
    const recipeLink= document.getElementById("recipe-link");
    const recipeTime= document.getElementById("recipe-time");
    const recipeImage= document.getElementById("recipe-image");
    const recipeRating= document.getElementById("recipe-rating");
    const recipeComments= document.getElementById("recipe-comments");
    const deleteRecipeBtn= document.getElementById("delete-recipe-btn");

    //assigning values
    recipeName.textContent= recipe.name;
    recipeCategory.select= recipe.category;
    recipeLink.href= recipe.link;
    recipeTime.select=recipe.time;
    recipeImage.src=recipe.image;
    recipeRating.innerHTML="";
    recipeComments.textContent=recipe.comments;
    deleteRecipeBtn.dataset.index= index;

    for (let i=1; i<=5; i++){
        const star= document.createElement("span");
        star.className= `star${recipe.rating == i ? " filled" : ""}`;
        star.innerHTML= "&#9733;";
        recipeRating.appendChild(star);
    }

    recipeDetailsContainer.style.display="block"
}

//function to hide the recipe details
function hideRecipeDetails(){
    const recipeDetailsContainer= document.getElementById("recipe-details-container");
    recipeDetailsContainer.style.display="none";
}


