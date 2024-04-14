// This helps to run the function as soon as the document is loaded
$(function(){
    let menuBtn = $("#menu-btn")
    let menu = $("#menu")

    menuBtn.on("click", function(){
        // This line helps to add or remove the class hidden to the menu element depending on the actual state of the class
        menu.toggleClass("hidden")
    })

})