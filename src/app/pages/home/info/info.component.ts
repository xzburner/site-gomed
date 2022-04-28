import { Component, OnInit } from '@angular/core';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from 'src/@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger20ms, stagger40ms } from 'src/@vex/animations/stagger.animation';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'vex-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger20ms,
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    scaleFadeIn400ms
  ]
})
export class InfoComponent implements OnInit {

  cards: Card[] = [
    {
      urlIcone: 'assets/img/illustrations/medicos.svg',
      titulo: 'Agendamento de consultas',
      subTitulo: 'Marque suas consultas com especialistas de forma rápida e segura'
    },
    {
      urlIcone: 'assets/img/illustrations/exames.svg',
      titulo: 'Agendamento de exames',
      subTitulo: 'Dê avaliações de rotina a análises específicas, agende exames com facilidade'
    },
    {
      urlIcone: 'assets/img/illustrations/desconto-farmacia.svg',
      titulo: 'Desconto em medicamentos',
      subTitulo: 'Encontre as medicações de que precisa com os melhores preços'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
