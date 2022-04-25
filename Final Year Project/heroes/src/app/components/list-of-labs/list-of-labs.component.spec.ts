import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfLabsComponent } from './list-of-labs.component';

describe('ListOfLabsComponent', () => {
  let component: ListOfLabsComponent;
  let fixture: ComponentFixture<ListOfLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfLabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
