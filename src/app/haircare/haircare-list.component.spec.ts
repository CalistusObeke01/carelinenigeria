import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircareListComponent } from './haircare-list.component';

describe('HaircareListComponent', () => {
  let component: HaircareListComponent;
  let fixture: ComponentFixture<HaircareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaircareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
