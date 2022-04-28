import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejaParceiroComponent } from './seja-parceiro.component';

describe('SejaParceiroComponent', () => {
  let component: SejaParceiroComponent;
  let fixture: ComponentFixture<SejaParceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SejaParceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SejaParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
