import { Medico } from './../../../models/Medico';
import { BaseRoutsEnum, AgendamentosRouts } from './../../../_constants/baseConstants';
import { CommonService } from './../../../services/common.service';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'vex-buscar-especialidade',
  templateUrl: './buscar-especialidade.component.html',
  styleUrls: ['./buscar-especialidade.component.scss']
})
export class BuscarEspecialidadeComponent implements OnInit {
  idEspecialidade;
  idConvenio;
  idExame;
  txtCep;

  medicos: Medico[] = [];

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "infinite": false };

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.idConvenio = window.localStorage.getItem("idConvenio");
    this.idEspecialidade = window.localStorage.getItem("idEspecialidade");
    this.idExame = window.localStorage.getItem("idExame");
    this.txtCep = window.localStorage.getItem("txtCep");

    window.localStorage.removeItem("idConvenio");
    window.localStorage.removeItem("idEspecialidade");
    window.localStorage.removeItem("idExame");
    window.localStorage.removeItem("txtCep");

    this.getMedicos();
  }

  getMedicos() {
    this.idEspecialidade = 'c27338dc-460d-49fe-86a4-559b332d822a';
    this.commonService.get(AgendamentosRouts.retornaAgendamentoMedicoQueryParams(BaseRoutsEnum.MEDICOAGENDAMENTO,
      10, 0, this.idEspecialidade, this.idConvenio, '')).subscribe((response) => {
        this.medicos.push(...response.body.data.medicos);
        this.medicos.forEach((med) => {
          med.dataHoraDisponivelAgendamentoBroken = this.computeDiasAgendados(med.dataHoraDisponivelAgendamento);
        });
      }, (error) => {
        console.log(error.message);
        //this.snackBar.open(MessagesSnackBar.CADASTRO_ERRO + error.Message, "Fechar", { duration: 40000 });
      });
  }

  computeDiasAgendados(dataHoraDisponivelAgendamento) {
    let variavel: string[] = [];
    for (let key = 0; key < dataHoraDisponivelAgendamento.length; key++) {
      var dataAtual = new Date(dataHoraDisponivelAgendamento[key]).getDate();
      const diaAnterior = new Date(dataHoraDisponivelAgendamento[key - 1]).getDate();
      if (dataAtual !== diaAnterior) {
        variavel.push(dataHoraDisponivelAgendamento.filter(sameData));
      }
    }

    function sameData(value) {
      return new Date(value).getDate() === dataAtual;
    }

    return variavel;
  }
}
