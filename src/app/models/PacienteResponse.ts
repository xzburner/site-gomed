export class PacienteResponse {
  id: string;
  nome: string;
  sexo: string;
  dataNascimento: string;
  cpf: string;
  email: string;
  telefone: string;
  celular: string;
  loginId: string;
  convenioId: string;
  pacienteEndereco: PacienteEndereco;
}

export class PacienteEndereco {
  cep: string;
  logradouro: string;
  complemento: string;
  numero: string;
  cidade: string;
  bairro: string;
  latitude: number;
  longitude: number;
  estadoId: string;
  cidadeId: string;
}
