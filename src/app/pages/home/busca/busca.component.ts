import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from 'src/@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger20ms, stagger40ms } from 'src/@vex/animations/stagger.animation';
import { ConveniosResponse } from 'src/app/models/ConveniosResponse';
import { EspecialidadesResponse } from 'src/app/models/EspecialidadesResponse';
import { CommonService } from './../../../services/common.service';
import { BaseRoutsEnum } from './../../../_constants/baseConstants';

@Component({
  selector: 'vex-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger20ms,
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    scaleFadeIn400ms
  ]
})
export class BuscaComponent implements OnInit {

  layoutCtrl = new FormControl('boxed');
  idEspecialidade;
  idConvenio;
  idExame;
  txtCep;
  isConsulta: boolean = true;
  form: FormGroup;
  listEspec: EspecialidadesResponse[];
  listEspecAux: EspecialidadesResponse[];
  listConvenio: ConveniosResponse[];
  listConvenioAux: ConveniosResponse[];
  listExames: ConveniosResponse[];
  listExamesAux: ConveniosResponse[];
  load: boolean = false;

  constructor(private fb: FormBuilder, private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.getEspecialidade();
    this.getConvenios();
    this.getExames();

    this.idConvenio = window.localStorage.getItem("idConvenio");
    this.idEspecialidade = window.localStorage.getItem("idEspecialidade");
    this.idExame = window.localStorage.getItem("idExame");
    this.txtCep = window.localStorage.getItem("txtCep");

    if (this.idExame != undefined && this.idExame != '') this.isConsulta = false;

    this.form = this.fb.group({
      especialidade: [this.idEspecialidade ?? ''],
      convenio: [this.idConvenio ?? ''],
      cep: [this.txtCep ?? ''],
      exame: [this.idExame ?? ''],
    });

  }

  onChangeConsultaExame(val) {
    this.isConsulta = JSON.parse(val);
  }

  getEspecialidade() {
    this.listEspec = [];
    this.load = true;
    this.commonService.get(BaseRoutsEnum.LISTESPECIALIDADES).subscribe((response) => {
      this.listEspec = response.body.data;
      this.listEspecAux = response.body.data;
      this.load = false;
    });
  }

  filterEspecEvent(param: string) {
    this.listEspec = this.listEspecAux.filter(x => x.nome.toUpperCase().includes(param.toUpperCase()));
  }

  getConvenios() {
    this.listEspec = [];
    this.load = true;
    this.commonService.get(BaseRoutsEnum.LISTCONVENIOS).subscribe((response) => {
      this.listConvenio = response.body.data;
      this.listConvenioAux = response.body.data;
      this.load = false;
    });
  }

  filterConveniosEvent(param: string) {
    this.listConvenio = this.listConvenioAux.filter(x => x.nome.toUpperCase().includes(param.toUpperCase()));
  }

  getExames() {
    this.listEspec = [];
    this.load = true;
    this.commonService.get(BaseRoutsEnum.LISTEXAMES).subscribe((response) => {
      this.listExames = response.body.data;
      this.listExamesAux = response.body.data;
      this.load = false;
    });
  }

  filterExamesEvent(param: string) {
    this.listExames = this.listExamesAux.filter(x => x.nome.toUpperCase().includes(param.toUpperCase()));
  }

  buscarMedicos() {
    let formBusca = this.form.value;
    window.localStorage.setItem('idConvenio', formBusca.convenio);
    window.localStorage.setItem('idEspecialidade', formBusca.especialidade);
    window.localStorage.setItem('idExame', formBusca.exame);
    window.localStorage.setItem('txtCep', formBusca.cep);
    this.router.navigate(['buscar-especialidade']);
  }
}
