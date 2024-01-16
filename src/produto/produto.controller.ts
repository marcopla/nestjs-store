import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoService } from './produto.service';

@Controller('/produtos')
export class ProdutoController {
  constructor(
    private produtoRepository: ProdutoRepository,
    private readonly produtoService: ProdutoService,
  ) {}
  @Post()
  async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
    this.produtoRepository.salvar(dadosDoProduto);
    return dadosDoProduto;
  }
  @Get()
  async listaProdutos() {
    return this.produtoRepository.listar();
  }
}
