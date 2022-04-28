export class Medico {
  id: string;
  nome: string;
  sexo: string;
  dataNascimento: string | null;
  crm: string;
  cpf: string;
  urlFoto: string;
  email: string;
  adicionarDiasConsulta: number;
  dataHoraDisponivelAgendamento: string[];
  dataHoraDisponivelAgendamentoBroken: string[];
  telefones: MedicoTelefones[];
  enderecos: MedicoEnderecos[];
  especialidades: MedicoEspecialidades[];
  formasPagamento: MedicoFormasPagamento[];
  convenios: MedicoConvenios[];
  diasIndisponiveisConsulta: number[];
}

export class MedicoEnderecos {
  id: string;
  cep: string;
  logradouro: string;
  complemento: string;
  numero: string;
  cidade: string;
  estado: string;
  bairro: string;
  latitude: number;
  longitude: number;
  estadoId: string;
  cidadeId: string;
}

export class MedicoTelefones {
  id: string;
  telefone: string;
  tipo: string;
}

export class MedicoEspecialidades {
  especialidadeId: string;
  valor: number;
}

export class MedicoFormasPagamento {
  id: number;
}

export class MedicoConvenios {
  convenioId: string;
}

export class MedicoHorariosAtendimento {
  diaSemana: number;
  horaInicio: number;
  horaFim: number;
  tempoConsultaMinutos: number;
  data: string;
}
