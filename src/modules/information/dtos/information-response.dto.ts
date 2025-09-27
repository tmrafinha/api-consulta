export class EnderecoDto {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  cep: string;
}

export class TelefoneDto {
  numero: string;
}

export class ResultadoDto {
  cpf: string;
  nome: string;
  nascimento: string;
  idade: string;
  signo: string;
  sexo: string;
  mae: string;
  pai: string;
  endereco: EnderecoDto;
  telefone: TelefoneDto;
}

export class InformationResponseDto {
  status: number;
  criador: string;
  resultado: ResultadoDto;
}
