"use strict";

let list = document.querySelectorAll("list-group-item prodotto");

console.log(list[0]);
list[0].className = "list-group-item prodotto";

function click(){
    list[0].className = "list-group-item prodotto";
};

for(let item in list)
{
    item.addEventListener("click", click);
}
list[0].addEventListener("click", click);





let listActive = document.getElementsByClassName("list-group-item prodotto active");

for(let item in listActive){
    item.addEventListener("click", clickDisable);
}

function clickDisable(){
    document.getElementById("1").className = "list-group-item prodotto";
};

