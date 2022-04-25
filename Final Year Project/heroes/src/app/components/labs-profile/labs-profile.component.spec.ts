import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsProfileComponent } from './labs-profile.component';

describe('LabsProfileComponent', () => {
  let component: LabsProfileComponent;
  let fixture: ComponentFixture<LabsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabsProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
