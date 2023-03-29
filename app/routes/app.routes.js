module.exports = (app) => {
   

    const Etudiant = require("../controllers/etudiant.controller.js");

  
    app.post("/create", Etudiant.create);
  
    app.get("/get-all", Etudiant.findAll);
    
    app.delete("/delete/:id", Etudiant.delete);

    

  };
  