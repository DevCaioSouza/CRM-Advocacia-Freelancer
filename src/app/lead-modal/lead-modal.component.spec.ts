import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadModalComponent } from './lead-modal.component';

describe('LeadModalComponent', () => {
  let component: LeadModalComponent;
  let fixture: ComponentFixture<LeadModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadModalComponent]
    });
    fixture = TestBed.createComponent(LeadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
