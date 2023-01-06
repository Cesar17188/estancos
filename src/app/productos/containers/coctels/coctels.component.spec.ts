import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctelsComponent } from './coctels.component';

describe('CoctelsComponent', () => {
  let component: CoctelsComponent;
  let fixture: ComponentFixture<CoctelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoctelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
