import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoService } from './produto.service';
import { ProdutoEntity } from './produto.entity';
import { randomUUID } from 'crypto';

@Controller('/produtos')
export class ProdutoController {
  constructor(
    private produtoRepository: ProdutoRepository,
    private readonly produtoService: ProdutoService,
  ) {}
  @Post()
  async criaProduto(@Body() dadosProduto: CriaProdutoDTO) {
    const produtoEntity = new ProdutoEntity();
    produtoEntity.id = randomUUID();
    produtoEntity.nome = dadosProduto.nome;
    produtoEntity.usuarioId = dadosProduto.usuarioId;
    produtoEntity.valor = dadosProduto.valor;
    produtoEntity.quantidade = dadosProduto.quantidade;
    produtoEntity.descricao = dadosProduto.descricao;
    produtoEntity.categoria = dadosProduto.categoria;
    produtoEntity.caracteristicas = dadosProduto.caracteristicas;
    produtoEntity.imagens = dadosProduto.imagens;
    const produtoCadastrado = this.produtoService.salvar(dadosProduto);
    return dadosDoProduto;
  }
  @Get()
  async listaProdutos() {
    return this.produtoRepository.listar();
  }
}
