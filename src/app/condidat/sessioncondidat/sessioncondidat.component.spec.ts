import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioncondidatComponent } from './sessioncondidat.component';

describe('SessioncondidatComponent', () => {
  let component: SessioncondidatComponent;
  let fixture: ComponentFixture<SessioncondidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessioncondidatComponent]
    });
    fixture = TestBed.createComponent(SessioncondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
