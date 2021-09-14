import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVermasComponent } from './modal-vermas.component';

describe('ModalVermasComponent', () => {
  let component: ModalVermasComponent;
  let fixture: ComponentFixture<ModalVermasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVermasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVermasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
