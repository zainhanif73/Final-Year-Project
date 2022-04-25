import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsignupComponent } from './dsignup.component';

describe('DsignupComponent', () => {
  let component: DsignupComponent;
  let fixture: ComponentFixture<DsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
