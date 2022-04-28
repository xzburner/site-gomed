import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';


@Component({
  selector: 'vex-info-para-voce',
  templateUrl: './info-para-voce.component.html',
  styleUrls: ['./info-para-voce.component.scss']
})
export class InfoParaVoceComponent implements OnInit {

  number: number;
  cards: Card[] = [
    {
      urlIcone: 'assets/img/para-voce/1.jpg',
      titulo: 'Adriana Bombonatti Villa Boas',
      subTitulo: 'Oftamologista'
    },
    {

      urlIcone: 'assets/img/para-voce/2.jpg',
      titulo: 'Ana Carolina Guimarães',
      subTitulo: 'Nutricionista.'
    },
    {
      urlIcone: 'assets/img/para-voce/3.jpg',
      titulo: 'Ana Caroline Oliveira',
      subTitulo: 'Nutricionista'
    },
    {
      urlIcone: 'assets/img/para-voce/4.jpg',
      titulo: 'Bruna Bombonatti',
      subTitulo: 'Dermatologista'
    },
    {
      urlIcone: 'assets/img/para-voce/5.jpg',
      titulo: 'Camila Pagano',
      subTitulo: 'Endocrinologista'
    },
    {
      urlIcone: 'assets/img/para-voce/6.jpg',
      titulo: 'Natalia Carneiro',
      subTitulo: 'Nutricionista'
    },
    {
      urlIcone: 'assets/img/para-voce/7.jpg',
      titulo: 'Renata Garboci Friggi',
      subTitulo: 'Alergista'
    },
    {
      urlIcone: 'assets/img/para-voce/8.jpg',
      titulo: 'Urbano Peixoto',
      subTitulo: 'Ginecologista'
    },
    {
      urlIcone: 'assets/img/para-voce/9.jpg',
      titulo: 'Luciana Alvarenga',
      subTitulo: 'Dermatologista'
    },
  ];

  listCards: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getMedicos();
  }

  getMedicos() {
    for (let i = 0; i < this.cards.length; i += 3) {
      this.listCards.push(this.cards.slice(i, Math.min(i + 3, this.cards.length)));
    }
  }

  redirect(){
    this.router.navigate(['buscar-especialidade']);
  }
}
