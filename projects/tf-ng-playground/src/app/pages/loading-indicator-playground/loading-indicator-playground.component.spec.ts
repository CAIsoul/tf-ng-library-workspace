import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIndicatorPlaygroundComponent } from './loading-indicator-playground.component';

describe('LoadingIndicatorPlaygroundComponent', () => {
  let component: LoadingIndicatorPlaygroundComponent;
  let fixture: ComponentFixture<LoadingIndicatorPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingIndicatorPlaygroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingIndicatorPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
