"use strict";

let rows = document.getElementsByClassName("list-group-item prodotto");


for(let row of rows)  //errore usare "in" anziché "of" nei for, "in" serve per contare gli indici, mentre "of" serve per contare gli elementi (non poteva funzionare con "in" quindi) -> https://bitsofco.de/for-in-vs-for-of/
{
    row.addEventListener("click", click);
}


function click(event){   //l'argomento "event" viene passato di default alla funzione che viene dichiarata dentro addEventListener e contiene le informazioni riguardo all'oggetto che è stato cliccato (nel caso di "click") -> https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    event.target.className = "list-group-item prodotto active";

};

let listActive = document.getElementsByClassName("list-group-item prodotto active");

for(let item of listActive){
    item.addEventListener("click", clickDisable);
}


function clickDisable(event){
    event.target.className="list-group-item prodotto"
};

// ricordati di scaricare firefox!
/* il codice così fa a grandi linee quello che vorremmo, c'è un solo problema, lo fa una volta sola, come puoi vedere provando a cliccare i tasti inattivi vengono attivati e cliccando quelli attivi si disattivano. Il problema è che dopo averlo fatto questa funzione
smette di funzionare e bisogna ricaricare la pagina. Ovviamente esistono vari modi per fixare questo bug, ma te lo lascio da fare per martedì prossimo. HINT: il problema potrebbe essere legato al fatto che gli elementi cambiano classe e non rientrano più nelle liste che abbiamo.
*/