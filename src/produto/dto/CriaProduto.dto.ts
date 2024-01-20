import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';

export class CaracteristicasDoProdutoDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome da característica não pode fica vazio.' })
  nome: string;
  @IsString()
  @IsNotEmpty({ message: 'A descrição não pode ficar vazia.' })
  descricao: string;
}

export class ImagemDoProdutoDTO {
  @IsUrl()
  url: string;
  @IsString()
  @IsNotEmpty({ message: 'Descrição deve ser preenchida.' })
  descricao: string;
}

export class CriaProdutoDTO {
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
  @Type(() => CaracteristicasDoProdutoDTO)
  caracteristicas: CaracteristicasDoProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ImagemDoProdutoDTO)
  imagens: ImagemDoProdutoDTO[];

  @IsString()
  @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
  categoria: string;

  @IsDateString()
  dataCriacao: Date;
  @IsDateString()
  dataAtualizacao: Date;
}
