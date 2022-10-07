import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRemoveModalComponent } from './check-remove-modal.component';

describe('CheckRemoveModalComponent', () => {
  let component: CheckRemoveModalComponent;
  let fixture: ComponentFixture<CheckRemoveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckRemoveModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckRemoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
