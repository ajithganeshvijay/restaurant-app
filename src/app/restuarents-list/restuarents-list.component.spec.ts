import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarentsListComponent } from './restuarents-list.component';

describe('RestuarentsListComponent', () => {
  let component: RestuarentsListComponent;
  let fixture: ComponentFixture<RestuarentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestuarentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestuarentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
