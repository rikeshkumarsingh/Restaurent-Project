import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaNavComponent } from './resta-nav.component';

describe('RestaNavComponent', () => {
  let component: RestaNavComponent;
  let fixture: ComponentFixture<RestaNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaNavComponent]
    });
    fixture = TestBed.createComponent(RestaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
