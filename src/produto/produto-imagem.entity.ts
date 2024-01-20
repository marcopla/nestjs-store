import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { ProdutoEntity } from './produto.entity';
@Entity('produto_imagens')
export class ProdutoImagemEntity {
  @PrimaryColumn({ name: 'url', length: 100, nullable: false })
  url: string;
  @Column({ name: 'descricao', length: 100, nullable: false })
  descricao: string;
  @ManyToOne(() => ProdutoEntity, (produto) => produto.imagem)
  produto: ProdutoEntity;
}
