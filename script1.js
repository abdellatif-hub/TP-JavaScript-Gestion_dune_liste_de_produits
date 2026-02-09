// ABDELLATIF EL HAMAOUI

const readline = require("readline-sync");
console.log("-------------------Partie A ---------------------------- ");


let produit1 = { id: 1, nom: "tablet", categorie: "informatique", prix: 2000, stock: 5 };

let produit2 = { id: 2, nom: "telephone", categorie: "informatique", prix: 4500, stock: 0 };

let produit3 = { id: 3, nom: "table de chevet", categorie: "maison", prix: 500, stock: 3 };

let produit4 = { id: 4, nom: "cable de sport", categorie: "sport", prix: 140, stock: 0 };

let produit5 = { id: 5, nom: "mixeur", categorie: "maison", prix: 190, stock: 2 };

let produits = [produit1, produit2, produit3, produit4, produit5];

console.log("Liste des produits :");
produits.forEach(p => {
  console.log(`${p.nom}  ${p.categorie}  ${p.prix} dhs  Stock : ${p.stock}`);
  
});

console.log("-------------------Partie B---------------------------- ");

console.log("les produits dont le stock est égal à 0 :");
produits.filter(p => p.stock === 0).forEach(p => console.log(p.nom));

console.log("............................. ");

console.log("prix supérieur à 500 DH :");
produits.filter(p => p.prix > 500).forEach(p => console.log(p.nom));

console.log("............................. ");

let categorieR = readline.question("Donner cat : ");

console.log(`Produits de la catégorie ${categorieR} :`);
produits.filter(p => p.categorie.toLowerCase() === categorieR.toLowerCase()).forEach(p => console.log(p.nom));


console.log("-------------------Partie C---------------------------- ");

console.log("Nombre total de produits :", produits.length);

console.log("............................. ");
let valeurStock = produits.reduce(
  (total, p) => total + p.prix * p.stock,
  0
);
console.log("valeur totale du stock :", valeurStock, "DH");

console.log("............................. "); 
console.log("---------------Produit le moins cher et le plus cher-----------------"); 

let produitMoinsCher = produits.reduce((min, p) =>
  p.prix < min.prix ? p : min
);

let produitPlusCher = produits.reduce((max, p) =>
  p.prix > max.prix ? p : max
);

console.log("produit le moins cher :", produitMoinsCher.nom);
console.log("produit le plus cher :", produitPlusCher.nom);

console.log("-------------------Partie D---------------------------- ");

console.log("------------------- Mise à jour du stock --------------------------- ");

let idRecherche = parseInt(readline.question("donner id du produit :"));
let produitTrouve = produits.find(p => p.id === idRecherche);

if (produitTrouve) {
  let quantite = parseInt(readline.question("Entrer la quantité à ajouter :"));
  produitTrouve.stock += quantite;
  console.log("Produit mis à jour :", produitTrouve);
} else {
  console.log("Produit introuvable");
}

console.log("............................. "); 
console.log("------------------- Suppression dun produit --------------------------- ");

let idSuppression = parseInt(readline.question("Entrer l'id du produit à supprimer :"));
produits = produits.filter(p => p.id !== idSuppression);
console.log("Liste après suppression :", produits);

console.log("-------------------Partie E---------------------------- ");

let triPrix = [...produits].sort((a, b) => a.prix - b.prix);
console.log("Produits triés par prix croissant :", triPrix);

console.log("............................. "); 

let triStock = [...produits].sort((a, b) => b.stock - a.stock);
console.log("Produits triés par stock décroissant :", triStock);

console.log("............................. ");

let statsCategories = {};

produits.forEach(p => {
  statsCategories[p.categorie] = (statsCategories[p.categorie] || 0) + 1;
});

let categorieMax = Object.keys(statsCategories).reduce((a, b) =>
  statsCategories[a] > statsCategories[b] ? a : b
);

console.log("Catégorie la plus représentée :", categorieMax);




