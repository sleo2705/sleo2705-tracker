//setting up an array to hold the recipes
let recipes= JSON.parse(localStorage.getItem('recipes')) || [
    {
        name: "Lasagna",
        category: "Dinner",
        minutes: "45",
        link:  "https://pinchofyum.com/super-easy-one-pot-lasagna",
        image: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/One-Pot-Lasagna-2.jpg",
        rating: "5",
        comments: "This recipe is delicious!"
    },

    {
        name: "Alfredo Pasta",
        category: "Lunch",
        minutes: "30",
        link: "https://www.recipetineats.com/one-pot-chicken-alfredo-pasta/",
        image: "https://www.recipetineats.com/wp-content/uploads/2017/03/One-Pot-Chicken-Alfredo-2.jpg?resize=650,910",
        rating: "3",
        comments: "This recipe is too creamy. Next time add lesser cream."
    },

    {
        name: "Apple Crumble",
        category: "Dessert",
        minutes: "25",
        link: "https://www.taste.com.au/recipes/quick-easy-apple-crumble/4f2e1fb8-2060-4e27-9833-a5ab7ab69717",
        image: "https://prettysimplesweet.com/wp-content/uploads/2017/09/AppleCrumble.jpg",
        rating: "4",
        comments:"Super simple and quick dessert to whip up."
    },

    {
        name: "Chicken Rice",
        category: "Lunch",
        minutes: "50",
        link: "https://iamafoodblog.com/hainanese-chicken-rice-best-easy-one-pot-chicken-rice-recipe/",
        image: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/09/one-pot-hainanese-chicken-7115.jpg",
        rating: "3",
        comments:"Yummy, would definitely make it again"
    }
];

//function to save recipes to local storage
function saveRecipes(){
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

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
        <p>${recipe.minutes} mins</p>
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
    const recipeDetailsContainer= document.getElementById("recipe-details-container");
    const recipeName= document.getElementById("recipe-name");
    const recipeCategory= document.getElementById("recipe-category");
    const recipeLink= document.getElementById("recipe-link");
    const recipeMinutes= document.getElementById("recipe-minutes");
    const recipeImage= document.getElementById("recipe-image");
    const recipeRating= document.getElementById("recipe-rating");
    const recipeComments= document.getElementById("recipe-comments");
    const recipeDate = document.getElementById("recipe-date"); 
    const recipeTime = document.getElementById("recipe-time"); 
    const deleteRecipeBtn= document.getElementById("delete-recipe-btn");

    //assigning values
    recipeName.textContent= recipe.name;
    recipeCategory.select= recipe.category;
    recipeLink.href= recipe.link;
    recipeMinutes.select=recipe.minutes;
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
    const recipeMinutesInput= document.getElementById("recipe-minutes-input");
    const recipeImageInput= document.getElementById("recipe-image-input");
    const recipeRatingInput= document.getElementById("recipe-rating-input");
    const recipeCommentsInput= document.getElementById("recipe-comments-input");

    const newRecipe= {
        name: recipeNameInput.value,
        category: recipeCategoryInput.value,
        link: recipeLinkInput.value,
        minutes: parseInt(recipeMinutesInput.value),
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
    recipeMinutesInput.value="";
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

//event lsitener for delete button in recipe details container
document.getElementById("delete-recipe-btn").addEventListener("click", function(event){
    const index= event.target.dataset.index;
    deleteRecipe(index);
    hideRecipeDetails();
});

//event listeners for adding recipe with form submission
document.getElementById("add-recipe-form").addEventListener("submit", addRecipe);

//initial display of recipe cards
displayRecipeCards();