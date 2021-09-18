import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFormsComponent } from './lista-forms.component';

describe('ListaFormsComponent', () => {
  let component: ListaFormsComponent;
  let fixture: ComponentFixture<ListaFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
