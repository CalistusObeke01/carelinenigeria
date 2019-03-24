import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeepCleansingStripsListComponent } from './deep-cleansing-strips-list.component';

describe('DeepCleansingStripsListComponent', () => {
  let component: DeepCleansingStripsListComponent;
  let fixture: ComponentFixture<DeepCleansingStripsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepCleansingStripsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepCleansingStripsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
