const etudiantModel = require("../models/etudiant.model.js");
const Etudiant = require("../models/etudiant.model.js");



// Create and Save a new Etudiant
exports.create = (req, res) => {

  const newEtudiant = new Etudiant({
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

  exports.delete = (req, res) => {
    const id = req.params.id;
    Etudiant.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          statut:'echec',
          message: `Cannot delete etudiant with id=${id}`
        });
      } else {
        res.send({
          statut:'succes',
          message: "Etudiant was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Etudiant with id=" + id
      });
    });
  }

  exports.update = (req, res) => {
    const id = req.params.id;
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }

    Etudiant.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Etudiant with id=${id}. Maybe Etudiant was not found!`
        });
      } else res.send({ message: "Etudiant was updated successfully.",payload:req.body });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Etudiant with id=" + id
      });
    });
  }