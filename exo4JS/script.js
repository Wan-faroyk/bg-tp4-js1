"use strict";
//============== Question1 : define object with name price and quantity=========
let produit ={
    name :"voiture ",
    prix: 3000 ,
    quantite : 10
};
//variablr for the total value:
console.log(" QUESTION 1 ");
let tot_qte = produit.prix * produit.quantite ;
console.log("le nom et la valuer: ");
console.log("name:", produit.name);
console.log("Valeur totale:", tot_qte);


//=========Question 2 : list of 5 objects with price / showing the object with a value more than the average of stack value :
   // list :
   console.log(" QUESTION 2 ");
let catalogue = [
    { nom: "PC", prix: 100000, quantite: 5 },
    { nom: "Mouse", prix: 1500, quantite: 10 },
    { nom: "Keyboard", prix: 5000, quantite: 8 },
    { nom: "Screen", prix: 30000, quantite: 4 },
    { nom: "Headphones", prix: 8000, quantite: 6 }
];
let somme = 0;

for (let i = 0; i < catalogue.length; i++) {
    somme += catalogue[i].prix;
}

let moyenne = somme / catalogue.length;
console.log("Moyenne:", moyenne);
for (let i = 0; i < catalogue.length; i++) {
    if(catalogue[i].prix > moyenne){
        console.log(catalogue[i].nom);
        console.log(catalogue[i].prix);
        console.log(catalogue[i].quantite);
    }
}


//==========Question3 : the total quantity o, the stock with the total value :
console.log(" QUESTION 3 ");
let totalArticles = catalogue.reduce(function(acc, p) {
    return acc + p.quantite;
}, 0);
console.log("Total articles:", totalArticles);


let valeurGlobale = catalogue.reduce(function(acc, p) {
    return acc + (p.prix * p.quantite);
}, 0);
console.log("Valeur globale:", valeurGlobale);



// ============Question 4 :
console.log(" QUESTION 4 ");

function calculerValeurStock(produit) {
    return produit.prix * produit.quantite;
}

console.log("verificaion:");

console.log(calculerValeurStock(catalogue[0]));
console.log(calculerValeurStock(catalogue[1]));
console.log(calculerValeurStock(catalogue[2]));
console.log(calculerValeurStock(catalogue[3]));
console.log(calculerValeurStock(catalogue[4]));


//=============Question 5 : 
console.log(" QUESTION 5 ");
function appliquerCatalogue(callback) {
    for (let i = 0; i < catalogue.length; i++) {
        callback(catalogue[i]);
    }
}

// Display the names of products
appliquerCatalogue(function(produit) {
    console.log(produit.nom);
});

// Display the prices of products
appliquerCatalogue(function(produit) {
    console.log(produit.prix);
});
