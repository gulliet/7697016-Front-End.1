// Récupération des données dans le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[0];

const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nomElement;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix : ${article.prix} € (${
    article.prix < 35 ? "€" : "€€€"
})`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie;

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiche.appendChild(categorieElement);
