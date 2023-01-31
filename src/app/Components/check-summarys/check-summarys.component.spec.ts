import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSummarysComponent } from './check-summarys.component';

describe('CheckSummarysComponent', () => {
  let component: CheckSummarysComponent;
  let fixture: ComponentFixture<CheckSummarysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckSummarysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckSummarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
