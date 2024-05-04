import {AddReceipeToDB} from "./handleDataBase.js"

// This helps to run the function as soon as the document is loaded
$(function(){

    let getStatus = true
    AddReceipeToDB(null, getStatus, null)
    // Here we make menu visible or hidden when the user clicks on the menu icon. This is for mobile device 
    let menuBtn = $("#menu-btn")
    let menu = $("#menu")
    // Here we get the whole main section 
    let mainSection = $("main")
    // Here we get all menu tags text
    let menuTagsText = $(".menu-tag span")
    // Here we get all menu tags icons 
    let menuTagsIcons = $(".menu-tag svg")
    let latestReceipeContainer = $("#last-receipe-container")
    let addRecipeForm=$("#add-receipe-form")
    let showAddrecipeFormCaller=$("#show-add-recipe-form")
    let exitFormBtn=$("#exit-form")
    let importImageBtn=$("#import-image")
    let inputImage=$("#image")
    let addRecipeFormImg = $("#add-receipe-form img")

    menuBtn.on("click", function(){
        // This line helps to add or remove the class hidden to the menu element depending on the actual state of the class
        menu.toggleClass("hidden")
        // This part helps to hide the menu as soon as the main section is hover on mobile devices 
        menuTagsIcons.addClass("mr-5")
        mainSection.on('mouseover', function(){
            menu.addClass("hidden")
    })
    })

    // Here we handle the menu tags selection 
    // This line helps to get all menu tags
    let allMenuTags = $(".menu-tag")
    // Here we listen the click on a tag
    allMenuTags.on("click", function(){
        // Here we remove the class active to the current element
        allMenuTags.each(function(){
            $(this).removeClass("active")
        })
        // Here we add the class active to the element the user has clicked on 
        $(this).addClass("active")
    })
    // Here we handle menu texts hidden or display on md and lg screen
    // Here we add a hover event listener on the menu
        menu.on("mouseover", function(){
        menuTagsText.removeClass("md:hidden")
        menuTagsIcons.addClass("mr-5")
        allMenuTags.addClass("py-3")
    })
    // Here we add a hover event listener on the main section 
        mainSection.on('mouseover', function(){
            menuTagsText.addClass("md:hidden")
            menuTagsIcons.removeClass("mr-5")
            allMenuTags.removeClass("py-3")    
    })

    // This part helps to show the form for adding recipes 
    showAddrecipeFormCaller.on("click", function(){
        addRecipeForm.toggleClass("scale-0 scale-100")
        menu.addClass("hidden")
    })
    // This part helps to close the form when the user click on the cancel button 
    exitFormBtn.on("click", function(){
        addRecipeForm.toggleClass("scale-0 scale-100")
    })
    // This part hepls to execute a click event on the input image 
    importImageBtn.on("click", function(){
         inputImage.trigger("click")
    })
    // This part helps to get the imported image in order to store it 
    inputImage.on('change', function() {
        const file = this.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = function() {
            const imageData = reader.result; 
            const img = new Image();
            img.src = imageData
            img.onload= function() {
              console.log('succes')
            localStorage.setItem('StoredImage', reader.result)
            // Here we replace the image on the form 
            addRecipeFormImg.attr("src", reader.result)
            };
            img.onerror= function() {
              console.log('Error')
            };
          };
            reader.readAsDataURL(file);
          }
      });

      // This part helps to get elements from add recipe form 
        addRecipeForm.on("submit", function(){
        let recipeName = $("#add-receipe-form #nom").val()
        let recipePrice = $("#add-receipe-form #prix").val()
        // This part helps to get the imported image in order to store it 
        let recipeImg = localStorage.getItem("StoredImage")
        localStorage.removeItem("StoredImage")
        
        let newRecipe = {
          name : recipeName,
          price : recipePrice,
          image : recipeImg
        }
        let addStatus = true
        // Here we send the new recipe to database so that to store it 
        AddReceipeToDB(newRecipe, null, addStatus)        
 })
})

// This function helps to add and show recipes in the recipe content 
export function addReceipe(recipe){
    let latestReceipeContainer = $("#last-receipe-container")
    latestReceipeContainer.append(`<div class="card">
    <a href="images/img-3.jpeg"><img src="${recipe.image}" alt="VevicFood Recipe" title="Click here" class="w-full h-35 sm:h-48 object-cover"></a>
    <div class="m-4 rounded-t-md">
        <span class="font-bold">${recipe.name}</span>
        <span class="block text-blue-100 text-sm">Recipe by Vevic</span>
    </div>
    <div>
        <span class="badge">
            <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(84, 78, 78, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg>
            ${recipe.price+" Fc"}
        </span>
    </div>
</div>`)
}

