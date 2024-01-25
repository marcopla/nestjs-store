import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  IsUrl,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { ProdutoEntity } from '../produto.entity';

export class CaracteristicasProdutoDTO {
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome da característica não pode fica vazio.' })
  nome: string;
  @IsString()
  @IsNotEmpty({ message: 'A descrição não pode ficar vazia.' })
  descricao: string;

  produto: ProdutoEntity;
}

export class ImagemProdutoDTO {
  id: string;

  @IsUrl()
  url: string;
  @IsString()
  @IsNotEmpty({ message: 'Descrição deve ser preenchida.' })
  descricao: string;
  produto: ProdutoEntity;
}

export class CriaProdutoDTO {
  @IsUUID(undefined, { message: 'ID do usuário Inválido' })
  usuarioId: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'O valor precisa ser maior que zero' })
  valor: number;

  @IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
  quantidade: number;

  @IsString()
  @IsNotEmpty({ message: 'Descrição do produto não pode ser vazia.' })
  @MaxLength(1000, { message: 'Descrição do produto não pode ser vazia.' })
  descricao: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => CaracteristicasProdutoDTO)
  caracteristicas: CaracteristicasProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];

  @IsString()
  @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
  categoria: string;

  @IsDateString()
  dataCriacao: Date;
  @IsDateString()
  dataAtualizacao: Date;
}
