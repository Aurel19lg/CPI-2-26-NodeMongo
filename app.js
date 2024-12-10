// Importer le module express
const express = require('express');
// Importer le module mongoose
const mongoose = require('mongoose');

// ================================================
// Connexion à la base de données
// ================================================

// Quand je suis connecté à la bdd (evenementiel)
mongoose.connection.once('open', () => {
    console.log("Connexion à la base de données effectué");
});

// Quand la bdd aura des erreurs
mongoose.connection.on('error', () => {
    console.log("Erreur dans la BDD");
});

// Se connecter sur mongodb (async)
// Ca prend x temps à s'executer
//TODO :: adapter le lien de connection a la bdd
mongoose.connect("mongodb://localhost:27017/db_demo");

//TODO : creer le modèle Article

// ================================================
// Instancier un serveur et autoriser envokie json
// ================================================
// Instancier le server grace à express
const app = express();

// AUTORISER LE BACK A RECEVOIR DES DONNEES DANS LE BODY
app.use(express.json());

// ================================================
// Les routes (url/point d'entrée)
// ================================================
app.get('/articles', async (request, response) => {
    return response.json({ message : "TODO le LOUP"}); 
});

app.get('/article/:id', async (request, response) => {
    return response.json({ message : 'id : ${idParam}'}); 
});

app.post('/save-article', async (request, response) => {
    return response.json({ message : "Ceci est juste un exemple"}); 
});

app.delete('/article/:id', async (request, response) => {
    return response.json({ message : "supprimera "}); 
});
// ================================================
// Lancer le serveur
// ================================================
app.listen(3000, () => {
    console.log("Le serveur a démarré");
});

