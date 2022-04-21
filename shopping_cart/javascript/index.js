
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

    getFav(i).addEventListener('click', event=>{
        setFav(i);
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

function getQtyValue (id){
    let item = getItemFromId(id);
    return parseInt(item.querySelector("h4[class=qty]").innerHTML);

}

function getFav (id){
    let item = getItemFromId(id);
    return item.querySelector("button[data-goal=fav]");
}
//setters//

function addQty(id){

    getQty(id).textContent ++;

}

function decQty(id){
    let qty = getQty(id).textContent;

    if(qty > 1){
        getQty(id).textContent--;
    }
}


function removeItem(id){
    let item = getItemFromId(id);
    item.remove();
}

function setFav (id){
    let favEl = getFav(id);
    let isFav = favEl.getAttribute("data-value");
    let red = "filter: invert(38%) sepia(59%) saturate(4230%) hue-rotate(335deg) brightness(94%) contrast(105%)"
    let black = "filter: none"
    
    console.log(isFav);

    if(isFav == "false"){

        favEl.children[0].style= red;
        favEl.setAttribute("data-value","true");

    }else if(isFav == "true"){
    
        favEl.children[0].style= black;
        favEl.setAttribute("data-value","false");
    
    }
    



}

