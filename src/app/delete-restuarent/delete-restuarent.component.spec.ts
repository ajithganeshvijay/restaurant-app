import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRestuarentComponent } from './delete-restuarent.component';

describe('DeleteRestuarentComponent', () => {
  let component: DeleteRestuarentComponent;
  let fixture: ComponentFixture<DeleteRestuarentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRestuarentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRestuarentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
