class AddClientUseCase {
    constructor(clientRepository) {
      this.clientRepository = clientRepository;
    }
  
    async execute(clientData) {
      return this.clientRepository.add(clientData);
    }
  }
  
  module.exports = AddClientUseCase;
  