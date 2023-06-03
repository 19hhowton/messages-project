import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // MessagesRepository is a dependency of MessagesService, in other words,
    // the service cannot run without a repository
    // DON"T DO THIS IN REAL APPS. Insead use dependency injection
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    // All the service does is turn around and call the Repo functions
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
