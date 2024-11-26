// Récupération des données dans le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
