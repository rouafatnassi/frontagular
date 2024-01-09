import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationAdminComponent } from './formation-admin.component';

describe('FormationAdminComponent', () => {
  let component: FormationAdminComponent;
  let fixture: ComponentFixture<FormationAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationAdminComponent]
    });
    fixture = TestBed.createComponent(FormationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
