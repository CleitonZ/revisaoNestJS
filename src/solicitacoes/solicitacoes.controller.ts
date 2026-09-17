import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { SolicitacoesService } from './solicitacoes.service';
import { CriarSolicitacaoDto } from "./dto/create-solicitacao.dto";


@Controller('solicitacoes')
export class SolicitacoesController {
  constructor(private readonly solicitacoesService: SolicitacoesService) { }

  @Get()
  listarSolicitacoes() {
    return this.solicitacoesService.listarSolicitacoes();
  }

  @Get(':id')
  buscar(@Param('id', ParseIntPipe) id: number) {
    return this.solicitacoesService.buscarPorId(id);
  }

  @Post()
  criar(@Body() body: CriarSolicitacaoDto) {
    const solicitacao = {...body };
    return this.solicitacoesService.criarSolicitacao(solicitacao);
  }
}
