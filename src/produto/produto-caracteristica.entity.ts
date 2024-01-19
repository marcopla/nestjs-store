import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { ProdutoEntity } from './produto.entity';
@Entity('produtos_caracteristicas')
export class ProdutoCaracteristicaEntity {
  @PrimaryColumn('uuid')
  id: string;
  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'descricao', length: 100, nullable: false })
  descricao: string;
  @ManyToOne(() => ProdutoEntity, (produto) => produto.caracteristicas)
  produto: ProdutoEntity;
}
