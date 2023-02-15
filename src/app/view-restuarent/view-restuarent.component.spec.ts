import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestuarentComponent } from './view-restuarent.component';

describe('ViewRestuarentComponent', () => {
  let component: ViewRestuarentComponent;
  let fixture: ComponentFixture<ViewRestuarentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestuarentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRestuarentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
