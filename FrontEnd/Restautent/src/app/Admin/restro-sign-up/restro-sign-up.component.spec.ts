import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroSignUpComponent } from './restro-sign-up.component';

describe('RestroSignUpComponent', () => {
  let component: RestroSignUpComponent;
  let fixture: ComponentFixture<RestroSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestroSignUpComponent]
    });
    fixture = TestBed.createComponent(RestroSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
