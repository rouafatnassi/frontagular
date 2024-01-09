import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormationComponent } from './session-formation.component';

describe('SessionFormationComponent', () => {
  let component: SessionFormationComponent;
  let fixture: ComponentFixture<SessionFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionFormationComponent]
    });
    fixture = TestBed.createComponent(SessionFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
