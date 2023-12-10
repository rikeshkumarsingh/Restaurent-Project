import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaDashboardComponent } from './resta-dashboard.component';

describe('RestaDashboardComponent', () => {
  let component: RestaDashboardComponent;
  let fixture: ComponentFixture<RestaDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaDashboardComponent]
    });
    fixture = TestBed.createComponent(RestaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
