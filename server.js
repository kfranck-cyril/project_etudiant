const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://nestjs-admin:Ip92JYUImuDTCiZI@cluster0.9zkvy.mongodb.net/school", 
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

const app = express();

app.use(cors({
    origin: '*',
     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running :D" });
});

let PORT = 8082;
require('./app/routes/app.routes.js')(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
