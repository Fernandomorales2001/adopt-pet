import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasCrudComponent } from './mascotas-crud.component';

describe('MascotasCrudComponent', () => {
  let component: MascotasCrudComponent;
  let fixture: ComponentFixture<MascotasCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
