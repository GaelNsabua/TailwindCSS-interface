const { event } = require("jquery")

function AddReceipeToDB(){
    let openRequest = indexedDB.open("ReceipeDataBase",1)
    let db=""

    openRequest.onupgradeneeded=function(){
        db=openRequest.result

        if(!db.objectStoreNames.contains("ReceipeStore")){
            let fileStore=db.createObjectStore("ReceipeStore",{keypath:"name"})
        }
    }

    openRequest.onsuccess=function(){
        db=openRequest.result

        let transaction=db.transaction("ReceipeStore","readwrite")
        transaction.oncomplete=function(){
            console.log("terminé")
        }
    }
    let fileStore=transaction.objectStore("ReceipeStore")
    const request=fileStore.add()
    request.onsuccess=function(){
        console.log("success");
    }
    request.onerror=function(){
        if(request.error.name=="ConstraintError"){
            alert("An object with such id already exists")
            event.preventDefault()
        } else{
            console.log("Error :"+request.error.name);
        }
    }
    transaction.onabort=function(){
        console.log("Error", transaction.error)
    }
}