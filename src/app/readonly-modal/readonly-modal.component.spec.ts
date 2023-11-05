import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyModalComponent } from './readonly-modal.component';

describe('ReadonlyModalComponent', () => {
  let component: ReadonlyModalComponent;
  let fixture: ComponentFixture<ReadonlyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadonlyModalComponent]
    });
    fixture = TestBed.createComponent(ReadonlyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
