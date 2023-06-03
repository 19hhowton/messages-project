import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // DONT DO THIS ON REAL APP USE DEPENDENCY INJECTION
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }
  // For Post, we need to extract the body from this request.
  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    // inside create, you want to put the message. The message is body.content
    return this.messagesService.create(body.content);
  }
  // For Get, we need to extract the wild card part from the route.
  @Get('/:id')
  getMessages(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}
