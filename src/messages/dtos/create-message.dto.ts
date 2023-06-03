import { IsString } from 'class-validator';

export class CreateMessageDto {
  // IsString is the validator. To ensure the content property is a string
  @IsString()
  content: string;
}
