import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHospitalComponent } from './block-hospital.component';

describe('BlockHospitalComponent', () => {
  let component: BlockHospitalComponent;
  let fixture: ComponentFixture<BlockHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
