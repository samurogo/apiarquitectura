const mongoose = require('mongoose');
const ClientRepository = require('../../domain/repositories/ClientRepository');
const Client = require('../../domain/entities/Client');

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

const ClientModel = mongoose.model('Client', clientSchema);

class MongoClientRepository extends ClientRepository {
  async add(clientData) {
    const client = new Client(clientData);
    const clientModel = new ClientModel(client);
    await clientModel.save();
    return client;
  }
}

module.exports = MongoClientRepository;
