import { Module } from '@nestjs/common';
import { SolicitacoesService } from './solicitacoes.service';

@Module({
  providers: [SolicitacoesService]
})
export class SolicitacoesModule {}
