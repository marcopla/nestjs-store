import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity('produto_imagens')
export class ProdutoImagem {
  @PrimaryColumn({ name: 'url', length: 100, nullable: false })
  url: string;
  @Column({ name: 'descricao', length: 100, nullable: false })
  descricao: string;
}
