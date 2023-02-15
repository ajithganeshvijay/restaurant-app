import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestuarentComponent } from './update-restuarent.component';

describe('UpdateRestuarentComponent', () => {
  let component: UpdateRestuarentComponent;
  let fixture: ComponentFixture<UpdateRestuarentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestuarentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRestuarentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
