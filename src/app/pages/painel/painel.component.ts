import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { Security } from 'src/app/utils/secutiry.utils';
import { Agendamento } from './../../models/Agendamentos';
import { Medico } from './../../models/Medico';
import { CommonService } from './../../services/common.service';
import { BaseRoutsEnum } from './../../_constants/baseConstants';
import { MessagesSnackBar } from './../../_constants/messages-snack-bar';

@Component({
  selector: 'vex-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  historicoAgendamentos: Agendamento[] = [];
  agendamentosFuturos: Agendamento[] = [];
  medico: Medico = new Medico();
  load: boolean = false;
  haveAgendamento: boolean = false;
  haveHistorico: boolean = false;
  user: Usuario;
  dp: DatePipe;

  constructor(private router: Router,
    private commonService: CommonService,
    private snackBar: MatSnackBar) { }

  async ngOnInit(): Promise<void> {
    this.user = Security.getUser();
    if (this.user == undefined) this.router.navigate(['/']);
    this.dp = new DatePipe(navigator.language);
    this.getAgendamentos();
  }

  getTipoAtendimentoStatus(flgStatus: string, flgTipoAtendimento: string) {
    if (flgStatus === 'A' && flgTipoAtendimento === 'C')
      return 'Consulta médica';
    else if (flgStatus === 'A' && flgTipoAtendimento !== 'C')
      return 'Exame';
    else if (flgStatus !== 'A' && flgTipoAtendimento === 'C')
      return 'Consulta cancelada';
    else if (flgStatus !== 'A' && flgTipoAtendimento !== 'C')
      return 'Exame cancelado';
  }

  validaOperadoraSaude(operadora: string): boolean {
    if (operadora == 'Particular') return true;
    return false;
  }

  getAgendamentos() {
    this.load = true;
    this.commonService.get(`${BaseRoutsEnum.LISTAGENDAMENTOS}/${this.user.id}`).subscribe((response) => {
      if (response.body.success) {
        if (response.body.data.agendamentosFuturos.length > 0) {
          this.agendamentosFuturos = response.body.data.agendamentosFuturos;
          this.haveAgendamento = true;
        }
        if (response.body.data.agendamentosFuturos.length > 0) {
          this.historicoAgendamentos = response.body.data.historicoAgendamentos;
          this.haveHistorico = true;
        }
        this.load = false;
      }
      else if (response.body.errors && response.body.errors.length > 0)
        this.snackBar.open(MessagesSnackBar.BUSCA_ERRO + response.body.errors.join(';'), "Fechar", { duration: 40000 });
      else
        this.snackBar.open(MessagesSnackBar.BUSCA_FALHA, "Fechar", { duration: 40000 });
    }, (error) => {
      console.log(error.message);
      this.snackBar.open(MessagesSnackBar.BUSCA_ERRO + error.Message, "Fechar", { duration: 40000 });
    });
  }
}
