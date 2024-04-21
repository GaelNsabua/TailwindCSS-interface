// This helps to run the function as soon as the document is loaded
$(function(){
    // Here we make menu visible or hidden when the user clicks on the menu icon. This is for mobile device 
    let menuBtn = $("#menu-btn")
    let menu = $("#menu")

    menuBtn.on("click", function(){
        // This line helps to add or remove the class hidden to the menu element depending on the actual state of the class
        menu.toggleClass("hidden")
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
    // Here we handle menu texts hidden or display 
    // Here we get all menu tags text
    let menuTagsText = $(".menu-tag span")
    // Here we get all menu tags icons 
    let menuTagsIcons = $(".menu-tag svg")
    // Here we get the whole main section 
    let mainSection = $("main")
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
})

