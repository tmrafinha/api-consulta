import { Prisma } from "@prisma/client";
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";

export function mapPrismaError(e: Prisma.PrismaClientKnownRequestError) {
  const meta = e.meta ?? null;

  switch (e.code) {
    case "P2000":
      return new BadRequestException({
        message: "Valor muito grande para o campo.",
        errors: meta,
      });

    case "P2001":
      return new NotFoundException({
        message: "Registro não encontrado.",
        errors: meta,
      });

    case "P2002":
      return new ConflictException({
        message: "Violação de valor único. Registro já existe.",
        errors: meta,
      });

    case "P2003":
      return new BadRequestException({
        message: "Violação de chave estrangeira.",
        errors: meta,
      });

    case "P2004":
      return new BadRequestException({
        message: "Uma restrição falhou no banco de dados.",
        errors: meta,
      });

    case "P2005":
      return new BadRequestException({
        message: "Valor inválido armazenado no banco.",
        errors: meta,
      });

    case "P2006":
      return new BadRequestException({
        message: "Valor inválido fornecido para o campo.",
        errors: meta,
      });

    case "P2007":
      return new BadRequestException({
        message: "Erro de validação do banco de dados.",
        errors: meta,
      });

    case "P2008":
      return new InternalServerErrorException({
        message: "Erro de consulta no servidor.",
        errors: meta,
      });

    case "P2009":
      return new BadRequestException({
        message: "Erro na validação da consulta.",
        errors: meta,
      });

    case "P2010":
      return new BadRequestException({
        message: "Erro bruto no banco de dados.",
        errors: meta,
      });

    case "P2011":
      return new BadRequestException({
        message: "Violação de valor nulo em campo não-nullable.",
        errors: meta,
      });

    case "P2012":
      return new BadRequestException({
        message: "Campo obrigatório faltando.",
        errors: meta,
      });

    case "P2013":
      return new BadRequestException({
        message: "Faltando argumento obrigatório.",
        errors: meta,
      });

    case "P2014":
      return new BadRequestException({
        message:
          "A relação entre os registros está com referências inconsistentes.",
        errors: meta,
      });

    case "P2015":
      return new NotFoundException({
        message: "Registro relacionado não encontrado.",
        errors: meta,
      });

    case "P2016":
      return new BadRequestException({
        message: "Consulta inválida detectada.",
        errors: meta,
      });

    case "P2017":
      return new BadRequestException({
        message:
          "A relação entre registros no banco está em um estado inválido.",
        errors: meta,
      });

    case "P2018":
      return new NotFoundException({
        message: "Registro relacionado não encontrado.",
        errors: meta,
      });

    case "P2019":
      return new BadRequestException({
        message: "Entrada inválida fornecida.",
        errors: meta,
      });

    case "P2020":
      return new BadRequestException({
        message: "Número fora do intervalo permitido.",
        errors: meta,
      });

    case "P2021":
      return new InternalServerErrorException({
        message: "Tabela não encontrada no banco de dados.",
        errors: meta,
      });

    case "P2022":
      return new InternalServerErrorException({
        message: "Coluna não encontrada no banco de dados.",
        errors: meta,
      });

    case "P2023":
      return new InternalServerErrorException({
        message: "Dados inconsistentes no banco.",
        errors: meta,
      });

    case "P2024":
      return new InternalServerErrorException({
        message:
          "Operação demorou mais do que o permitido pelo timeout do banco.",
        errors: meta,
      });

    case "P2025":
      return new NotFoundException({
        message: "Registro não encontrado. Nenhum item foi alterado.",
        errors: meta,
      });

    case "P2026":
      return new BadRequestException({
        message: "Uso inválido de função no banco de dados.",
        errors: meta,
      });

    case "P2027":
      return new BadRequestException({
        message: "Dados inválidos enviados para a consulta.",
        errors: meta,
      });

    case "P2028":
      return new InternalServerErrorException({
        message: "Erro desconhecido no driver do banco.",
        errors: meta,
      });

    case "P2030":
      return new ForbiddenException({
        message: "Ação impossibilitada devido ao estado atual dos registros.",
        errors: meta,
      });

    case "P2031":
      return new InternalServerErrorException({
        message: "Falha ao conectar ao banco de dados.",
        errors: meta,
      });

    case "P2033":
      return new BadRequestException({
        message: "Conversão numérica inválida.",
        errors: meta,
      });

    case "P2034":
      return new ForbiddenException({
        message: "Acesso negado no banco de dados.",
        errors: meta,
      });

    default:
      console.error("Unhandled Prisma Error:", e);
      return new InternalServerErrorException({
        message: "Erro interno no banco de dados.",
        errors: meta,
      });
  }
}
