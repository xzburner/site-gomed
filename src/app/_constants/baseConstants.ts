export enum BaseRoutsEnum {
  LISTESPECIALIDADES = '/auxiliar/especialidade',
  LISTEXAMES = '/auxiliar/exame',
  LISTCONVENIOS = '/auxiliar/operadoraSaude',
  LISTCIDADE = '/auxiliar/cidade',
  AUTHENTICATE = '/usuario/login',
  GETPACIENTE = '/paciente',
  LISTAGENDAMENTOS = '/Agendamento/paciente/full',
  CANCELAGENDAMENTO = '/agendamento/cancelar',
    MEDICO = '/medico',
    MEDICOAGENDAMENTO = '/Medico?',
  CLINICALABORATORIO = '/clinica/laboratorio'
}

export class AgendamentosRouts {
  static retornaAgendamentoQueryParams(rota: string, tipoAgendamento: string, limit: number, offset: number) {//, codigo: string, nome: string) {

    if (tipoAgendamento != '') rota += `&tipoAgendamento=${tipoAgendamento}`;
    if (limit > 0) rota += `&limit=${limit}`;
    if (offset >= 0) rota += `&offset=${offset}`;
    // if (codigo != '') rota += `&Codigo=${codigo}`;
    // if (nome != '') rota += `&Nome=${nome}`;

    return rota;
  }

  static retornaAgendamentoMedicoQueryParams(rota: string, limit: number, offset: number, especialidade: string, convenio: string, cidadeid: string) {
    if (limit >= 0) rota += `&limit=${limit}`;
    if (offset >= 0) rota += `&offset=${offset}`;
    if (especialidade) rota += `&especialidade=${especialidade}`;
    if (cidadeid) rota += `&cidadeid=${cidadeid}`;

    return rota;
  }
}
