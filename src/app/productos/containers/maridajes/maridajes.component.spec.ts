import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaridajesComponent } from './maridajes.component';

describe('MaridajesComponent', () => {
  let component: MaridajesComponent;
  let fixture: ComponentFixture<MaridajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaridajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaridajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
