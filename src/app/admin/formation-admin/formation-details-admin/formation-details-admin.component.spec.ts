import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationDetailsAdminComponent } from './formation-details-admin.component';

describe('FormationDetailsAdminComponent', () => {
  let component: FormationDetailsAdminComponent;
  let fixture: ComponentFixture<FormationDetailsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationDetailsAdminComponent]
    });
    fixture = TestBed.createComponent(FormationDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
