import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'vex-card-especialidades',
  templateUrl: './card-especialidades.component.html',
  styleUrls: ['./card-especialidades.component.scss']
})
export class CardEspecialidadesComponent implements OnInit {

  @Input() card = new Card();

  constructor() { }

  ngOnInit(): void {
  }

}
