import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestileriaComponent } from './destileria.component';

describe('DestileriaComponent', () => {
  let component: DestileriaComponent;
  let fixture: ComponentFixture<DestileriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestileriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestileriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
