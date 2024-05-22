const AddClientUseCase = require('../../application/use_cases/AddClientUseCase');

class ClientController {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async addClient(req, res) {
    const addClientUseCase = new AddClientUseCase(this.clientRepository);
    try {
      const client = await addClientUseCase.execute(req.body);
      res.status(201).json(client);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = ClientController;
