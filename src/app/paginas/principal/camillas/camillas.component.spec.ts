import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamillasComponent } from './camillas.component';

describe('CamillasComponent', () => {
  let component: CamillasComponent;
  let fixture: ComponentFixture<CamillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
