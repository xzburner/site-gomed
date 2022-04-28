import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'vex-card-informativo',
  templateUrl: './card-informativo.component.html',
  styleUrls: ['./card-informativo.component.scss']
})
export class CardInformativoComponent implements OnInit {

  @Input() card = new Card();

  constructor() { }

  ngOnInit(): void {
  }

}
