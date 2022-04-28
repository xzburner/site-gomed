import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'vex-info-parceiro',
  templateUrl: './info-parceiro.component.html',
  styleUrls: ['./info-parceiro.component.scss']
})
export class InfoParceiroComponent implements OnInit {

  cards: Card[] = [
    {
      urlIcone: 'assets/img/seja-parceiro/1.png',
      titulo: 'Mais agendamentos',
      subTitulo: 'Veja o número de agendamentos aumentar de forma prática e segura.'
    },
    {

      urlIcone: 'assets/img/seja-parceiro/2.png',
      titulo: 'Custo zero',
      subTitulo: 'Alcance mais pacientes e realize mais consultas sem pagar nada.'
    },
    {
      urlIcone: 'assets/img/seja-parceiro/3.png',
      titulo: 'Relacionamento com o Paciente',
      subTitulo: 'Uma plataforma confiável para simplificar e fortalecer sua relação com cada paciente.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
