// This helps to run the function as soon as the document is loaded
$(function(){
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
        addReceipe()
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

    function addReceipe(){
        latestReceipeContainer.append(`<div class="card">
        <a href="images/img-3.jpeg"><img src="Images/img-5.jpeg" alt="VevicFood Recipe" title="Click here" class="w-full h-35 sm:h-48 object-cover"></a>
        <div class="m-4 rounded-t-md">
            <span class="font-bold">Frites avec poulet</span>
            <span class="block text-blue-100 text-sm">Recipe by Vevic</span>
        </div>
        <div>
            <span class="badge">
                <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(84, 78, 78, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg>
                25 mins
            </span>
        </div>
    </div>`)
    }
    
})

