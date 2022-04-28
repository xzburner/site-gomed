import { Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import icShoppingBasket from '@iconify/icons-ic/twotone-shopping-basket';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from 'src/@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger20ms } from 'src/@vex/animations/stagger.animation';

@Component({
  selector: 'vex-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger20ms,
    scaleIn400ms,
    fadeInRight400ms,
    scaleFadeIn400ms
  ]
})
export class FooterComponent implements OnInit, OnDestroy {

  @Input() customTemplate: TemplateRef<any>;
  icShoppingBasket = icShoppingBasket;

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void { }
}
