import { Component, OnInit } from '@angular/core';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from 'src/@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger20ms, stagger40ms } from 'src/@vex/animations/stagger.animation';

@Component({
  selector: 'vex-recomendacoes',
  templateUrl: './recomendacoes.component.html',
  styleUrls: ['./recomendacoes.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger20ms,
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    scaleFadeIn400ms
  ]
})
export class RecomendacoesComponent implements OnInit {

  slides = [
    {
      imagem: 'assets/img/illustrations/image.jpg',
      comentario: 'Detesto agendar consulta por telefone, foi a primeira vez que usei, achei de fácil navegação e intuitivo, agora posso agendar minhas consultas sem stress. Muito obrigado GoMed.',
      nome: 'Daniela Custódio',
      decricao: '(Paciente)'
    },
    {
      imagem: 'assets/img/illustrations/image2.jpg',
      comentario: 'Ferramenta completa e confiável que acredito pela facilidade e otimização nos agendamentos, percebi um aumento no número de novos pacientes da clínica. Recomendo aos colegas de profissão.',
      nome: 'Thomas Benson',
      decricao: '(Médico)'
    },
    {
      imagem: 'assets/img/illustrations/image3.jpg',
      comentario: 'Esqueça o livrinho do seu plano, escolha seu médico e horário sem telefonemas e musiquinhas de espera. Prático e completo.',
      nome: 'Bruno Cursino',
      decricao: '(Paciente)'
    },
    {
      imagem: 'assets/img/illustrations/image.jpg',
      comentario: 'Detesto agendar consulta por telefone, foi a primeira vez que usei, achei de fácil navegação e intuitivo, agora posso agendar minhas consultas sem stress. Muito obrigado GoMed.',
      nome: 'Daniela Custódio',
      decricao: '(Paciente)'
    }
  ];

  listCards: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getEspecialidades();
  }

  getEspecialidades() {
    for (let i = 0; i < this.slides.length; i += 3) {
      this.listCards.push(this.slides.slice(i, Math.min(i + 3, this.slides.length)));
    }
  }
}
