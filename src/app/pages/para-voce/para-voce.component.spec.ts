import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaVoceComponent } from './para-voce.component';

describe('ParaVoceComponent', () => {
  let component: ParaVoceComponent;
  let fixture: ComponentFixture<ParaVoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaVoceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaVoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
