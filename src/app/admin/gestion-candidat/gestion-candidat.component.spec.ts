import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCandidatComponent } from './gestion-candidat.component';

describe('GestionCandidatComponent', () => {
  let component: GestionCandidatComponent;
  let fixture: ComponentFixture<GestionCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCandidatComponent]
    });
    fixture = TestBed.createComponent(GestionCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
