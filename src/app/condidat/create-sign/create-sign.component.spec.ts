import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSignComponent } from './create-sign.component';

describe('CreateSignComponent', () => {
  let component: CreateSignComponent;
  let fixture: ComponentFixture<CreateSignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSignComponent]
    });
    fixture = TestBed.createComponent(CreateSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
