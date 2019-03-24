import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmoreChildComponent } from './readmore-child.component';

describe('ReadmoreChildComponent', () => {
  let component: ReadmoreChildComponent;
  let fixture: ComponentFixture<ReadmoreChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmoreChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmoreChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
