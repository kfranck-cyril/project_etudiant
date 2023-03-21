const Etudiant = require("../models/etudiant.model.js");



// Create and Save a new Etudiant
exports.create = (req, res) => {

  const newEtudiant = new App({
    nom : req.body.nom,
    prenom : req.body.prenom,
    matricule : req.body.matricule,
    genre : req.body.genre,
    age : req.body.age
  });
  
  newEtudiant
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    });
};

// Retrieve all etudiants from the database.
exports.findAll = (req, res) => {
    
    Etudiant.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving messages.",
        });
      });
  };


