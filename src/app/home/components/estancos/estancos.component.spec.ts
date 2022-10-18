import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstancosComponent } from './estancos.component';

describe('EstancosComponent', () => {
  let component: EstancosComponent;
  let fixture: ComponentFixture<EstancosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstancosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
