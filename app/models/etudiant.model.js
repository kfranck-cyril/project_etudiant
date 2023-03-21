const mongoose = require("mongoose");

const EtudiantShema = mongoose.Schema({
  nom: String,
  prenom: String,
  matricule: String,
  age:Number,
  genre:String,
  
});




module.exports = mongoose.model("Etudiant", EtudiantShema);
