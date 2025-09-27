export declare class EnderecoDto {
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    cep: string;
}
export declare class TelefoneDto {
    numero: string;
}
export declare class ResultadoDto {
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
export declare class InformationResponseDto {
    status: number;
    criador: string;
    resultado: ResultadoDto;
}
