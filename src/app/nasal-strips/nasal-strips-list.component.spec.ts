import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasalStripsListComponent } from './nasal-strips-list.component';

describe('NasalStripsListComponent', () => {
  let component: NasalStripsListComponent;
  let fixture: ComponentFixture<NasalStripsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasalStripsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasalStripsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
