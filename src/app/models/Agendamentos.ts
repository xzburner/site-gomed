import { ClinicaResponse } from "./ClinicasResponse";
import { ConveniosResponse } from "./ConveniosResponse";
import { EspecialidadesResponse } from "./EspecialidadesResponse";
import { ExamesGrupoResponse } from "./ExamesGrupoResponse";
import { Medico, MedicoEnderecos } from "./Medico";

export class GetAgendamento {
  historicoAgendamentos: Agendamento[];
  agendamentosFuturos: Agendamento[];
}

export class Agendamento {
  id: string;
  medicoId: string | null;
  pacienteId: string;
  exameGrupoId: string | null;
  exameGrupo: ExamesGrupoResponse;
  especialidadeId: string;
  especialidade: EspecialidadesResponse;
  dataHoraAgendamento: string;
  dataHoraCadastro: string;
  dataHoraCancelamento: string;
  flgStatus: string;
  status: string;
  flgTipoAtendimento: string;
  motivoCancelamento: string;
  valorConsulta: number;
  operadoraSaudeId: string;
  operadoraSaude: ConveniosResponse;
  enderecoId: string;
  endereco: MedicoEnderecos;
  clinicaId: string | null;
  clinica: ClinicaResponse;
  avisoAgendamento: boolean | null;
  lembreteAgendamento: boolean | null;
  medico: Medico;
}
