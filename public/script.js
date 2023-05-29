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

//function to add a new recipe
function addRecipe(event){
    event.preventDefault();

    const recipeNameInput= document.getElementById("recipe-name-input");
    const recipeCategoryInput= document.getElementById("recipe-category-input");
    const recipeLinkInput= document.getElementById("recipe-link-input");
    const recipeTimeInput= document.getElementById("recipe-time-input");
    const recipeImageInput= document.getElementById("recipe-image-input");
    const recipeRatingInput= document.getElementById("recipe-rating-input");
    const recipeCommentsInput= document.getElementById("recipe-comments-input");

    const newRecipe= {
        name: recipeNameInput.value,
        category: recipeCategoryInput.value,
        link: recipeLinkInput.value,
        time: parseInt(recipeTimeInput.value),
        image: recipeImageInput.value,
        rating: parseInt(recipeRatingInput.value),
        comments:recipeCommentsInput.value,
        date: new Date().toLocaleDateString(), //current date
        time: new Date().toLocaleDateString() //current time
    };

    //when the user submits new recipe to the existing recipe array
    recipes.push(newRecipe);
    displayRecipeCards();
    recipeNameInput.value="";
    recipeCategoryInput.value="";
    recipeLinkInput.value="";
    recipeTimeInput.value="";
    recipeImageInput.value="";
    recipeRatingInput.value="";
    recipeCommentsInput.value="";
}

//function to delete existind recipes 
function deleteRecipe(index){
    recipes.splice(index,1);
    displayRecipeCards();
}

//event listeners for the recipe cards
document.getElementById("recipe-cards-container").addEventListener("click", function(event){
    if(event.target.classList.contains("expand-btn")){
        const index=event.target.parentElement.querySelector(".delete-btn").dataset.index;
        displayRecipeDetails(index);
    }
});

//event listeners for adding recipe with form submission
document.getElementById("add-recipe-form").addEventListener("submit", addRecipe);

//initial display of recipe cards
displayRecipeCards();