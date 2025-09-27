"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationResponseDto = exports.ResultadoDto = exports.TelefoneDto = exports.EnderecoDto = void 0;
class EnderecoDto {
    logradouro;
    numero;
    complemento;
    bairro;
    cidade;
    estado;
    pais;
    cep;
}
exports.EnderecoDto = EnderecoDto;
class TelefoneDto {
    numero;
}
exports.TelefoneDto = TelefoneDto;
class ResultadoDto {
    cpf;
    nome;
    nascimento;
    idade;
    signo;
    sexo;
    mae;
    pai;
    endereco;
    telefone;
}
exports.ResultadoDto = ResultadoDto;
class InformationResponseDto {
    status;
    criador;
    resultado;
}
exports.InformationResponseDto = InformationResponseDto;
//# sourceMappingURL=information-response.dto.js.map