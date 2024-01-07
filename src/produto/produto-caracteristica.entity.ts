import { Entity, Column } from 'typeorm';
@Entity('produtos_caracteristicas')
export class ProdutoCaracteristica {
  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'descricao', length: 100, nullable: false })
  descricao: string;
}
