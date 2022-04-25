import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsignupComponent } from './psignup.component';

describe('PsignupComponent', () => {
  let component: PsignupComponent;
  let fixture: ComponentFixture<PsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
