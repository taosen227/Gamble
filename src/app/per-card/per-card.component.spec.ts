import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerCardComponent } from './per-card.component';

describe('PerCardComponent', () => {
  let component: PerCardComponent;
  let fixture: ComponentFixture<PerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
