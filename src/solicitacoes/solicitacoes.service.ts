import { Injectable, NotFoundException } from '@nestjs/common';
import { CriarSolicitacaoDto } from './dto/create-solicitacao.dto';

type Solicitacao = {
  id: number,
  justificativa: string,
  quantidade: number,
}

@Injectable()
export class SolicitacoesService {
  private readonly solicitacoes:Solicitacao[] = [
    { id: 1, justificativa: "Compra de material eletrônico", quantidade: 7 },
    { id: 2, justificativa: "Manutenção da Impressora", quantidade: 1},
    { id: 3, justificativa: "Requerimento de um novo espaço de trabalho", quantidade: 12 },
  ];

  listarSolicitacoes() {
    return this.solicitacoes;
  }

  buscarPorId(id: number) {
    const solicitacao = this.solicitacoes.find((item) => item.id === id);

    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }

    return solicitacao;
  }

  criarSolicitacao(dados: Omit<CriarSolicitacaoDto, "id">) {
    const novoID = Number(this.solicitacoes.length + 1);
    const novaSolicitacao = { id: novoID, ...dados }
    this.solicitacoes.push(novaSolicitacao);

    return novaSolicitacao;
  }
}