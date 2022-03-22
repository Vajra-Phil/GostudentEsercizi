"use strict";

let list = document.getElementsByClassName("list-group prodotti");
for(let item in list)
{
    item.addEventListener("click", click);
    function click(){
        item.className = "list-group-item prodotto active";
    };
}


let listActive = document.getElementsByClassName("list-group-item prodotto active");

for(let item in listActive){
    item.addEventListener("click", clickDisable);
    function clickDisable(){
        item.className = "list-group-item prodotto";
    };
}

