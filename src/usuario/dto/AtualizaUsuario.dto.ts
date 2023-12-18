import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class AtualizaUsuarioDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  nome: string;
  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @EmailEhUnico({ message: 'Já existe um usuário com este e-mail.' })
  @IsOptional()
  email: string;
  @IsOptional()
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracters' })
  senha: string;
}
