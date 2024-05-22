const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ClientController = require('./infrastructure/controllers/ClientController');
const MongoClientRepository = require('./infrastructure/persistence/MongoClientRepository');

dotenv.config();

const app = express();
app.use(express.json());

const clientRepository = new MongoClientRepository();
const clientController = new ClientController(clientRepository);

app.post('/clients', (req, res) => clientController.addClient(req, res));

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Database connection error:', error);
  });
