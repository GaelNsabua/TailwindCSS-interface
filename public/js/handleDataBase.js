import {addReceipe} from "./main.js"
// This function helps to handle the database, precisely indexedDB 
export function AddReceipeToDB(newRecipe, getStatus, addStatus){
    let openRequest = indexedDB.open("RecipeDataBase",1)
    let db=""

    openRequest.onupgradeneeded=function(){
        db=openRequest.result

        if(!db.objectStoreNames.contains("RecipeStore")){
            db.createObjectStore("RecipeStore",{keypath:'name'})
        }
    }

    openRequest.onsuccess=function(){
        db=openRequest.result

        let transaction=db.transaction(["RecipeStore"],"readwrite")

        transaction.oncomplete=function(){
            console.log("terminé")
        }

        let fileStore=transaction.objectStore("RecipeStore")
        // This part helps to add a recipe to the database 
        if(addStatus){
            const request=fileStore.add(newRecipe, newRecipe.name)

            request.onsuccess=function(){
                console.log("success");
                 }
        
                request.onerror=function(event){
                if(request.error.name=="ConstraintError"){
                    alert("An object with such id already exists")
                    event.preventDefault()
                } else{
                    console.log("Error :"+request.error.name);
                }
            }
        }
    
    // This part helps to get all the recipes from the database so that to show it on recipe container 
    if(getStatus){
        const getRequest = fileStore.openCursor();
        getRequest.onsuccess = function(event) {
        const cursor = event.target.result;

        if (cursor) {
      // File found, do something with it
            const recipe = cursor.value;
            addReceipe(recipe)
      // Move to the next cursor
            cursor.continue();
        } else {
      // No more files
      console.log('All files retrieved');
        }   
  };
    }

    transaction.onabort=function(){
        console.log("Error", transaction.error)
    }
    }
    
}