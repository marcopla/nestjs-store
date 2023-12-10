import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.cotroller';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [],
})
export class AppModule {}
