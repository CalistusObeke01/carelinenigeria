import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinlabComponent } from './skinlab.component';

describe('SkinlabComponent', () => {
  let component: SkinlabComponent;
  let fixture: ComponentFixture<SkinlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
