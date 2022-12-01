import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasCataComponent } from './notas-cata.component';

describe('NotasCataComponent', () => {
  let component: NotasCataComponent;
  let fixture: ComponentFixture<NotasCataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasCataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasCataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
