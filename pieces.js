// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {
    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // Création des balises
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${
        article.prix < 35 ? "€" : "€€€"
    })`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText =
        article.description ?? "Pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite
        ? "En stock"
        : "Rupture de stock";

    // On rattache la balise article a la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    //Ajout des éléments au DOM pour l'exercice
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
}

const btnTrier = document.querySelector(".btn-trier");
btnTrier.addEventListener("click", () => {
    const piecesOrdonnees = Array.from(pieces);

    piecesOrdonnees.sort((a, b) => {
        return a.prix - b.prix;
    });
    console.log(pieces);
    console.log(piecesOrdonnees);
});

const btnTrierDecroissant = document.querySelector(".btn-trier-decroissant");
btnTrierDecroissant.addEventListener("click", () => {
    const piecesOrdonnees = Array.from(pieces);

    piecesOrdonnees.sort((a, b) => {
        return -1 * (a.prix - b.prix);
    });
    console.log(pieces);
    console.log(piecesOrdonnees);
});

const btnFilter = document.querySelector(".btn-filtrer");
btnFilter.addEventListener("click", () => {
    const piecesFiltrees = pieces.filter((piece) => {
        return piece.prix <= 35;
    });
    console.log(piecesFiltrees);
});

const btnNoDescrip = document.querySelector(".btn-nodescrip");
btnNoDescrip.addEventListener("click", () => {
    const piecesFiltrees = pieces.filter((piece) => {
        return piece.description == null;
    });
    console.log(piecesFiltrees);
});
