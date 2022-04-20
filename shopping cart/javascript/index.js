
let itemsBox = document.getElementById("items");

//buttons init//
// dont think the code is the best, need to simplify maybe ?

for (let i = 0 ; i < itemsBox.childElementCount ; i++){

    getItemDelButton(i).addEventListener('click' , event => {
        removeItem(i);
    });

    getItemDecButton(i).addEventListener('click', event=>{
        decQty(i);
    });

    getItemIncButton(i).addEventListener('click', event=>{
        addQty(i);
    });

}


//getters

function getItemFromId(id){

    for(let i = 0 ;i < itemsBox.childElementCount;i++){
        let child = itemsBox.children[i];
    
        if(child.getAttribute("itemId") == id ){
            return child;
        }
    }
    return undefined;
}

function getItemIncButton(id){

    let item = getItemFromId(id);
    
    let button = item.querySelector("button[data-goal='inc']");
    
    return button;
}

function getItemDecButton(id){

    let item = getItemFromId(id);
    
    let button = item.querySelector("button[data-goal='dec']");
    
    return button;
}

function getItemDelButton(id){
    let item = getItemFromId(id);
    return item.querySelector("button[data-goal= 'delete']");
    
}

function getQty (id){
    let item = getItemFromId(id);
    return item.querySelector("h4[class=qty]");

}

//setters

function addQty(id){

    getQty(id).textContent ++;

}

function decQty(id){
    let qty = getQty(id).textContent;

    if(qty == 1){
        removeItem(id);
    }else{
        getQty(id).textContent--;
    }
}


function removeItem(id){
    let item = getItemFromId(id);
    item.remove();
}

