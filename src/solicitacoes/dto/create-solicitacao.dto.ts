import { IsString, MinLength, IsInt, Min } from "class-validator";

export class CriarSolicitacaoDto {
  @IsString()
  @MinLength(10)
  justificativa: string;

  @IsInt()
  @Min(1)
  quantidade: number;
}