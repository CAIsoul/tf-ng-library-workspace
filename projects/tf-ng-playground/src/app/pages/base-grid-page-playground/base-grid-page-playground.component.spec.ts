import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseGridPagePlaygroundComponent } from './base-grid-page-playground.component';

describe('BaseGridPagePlaygroundComponent', () => {
  let component: BaseGridPagePlaygroundComponent;
  let fixture: ComponentFixture<BaseGridPagePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseGridPagePlaygroundComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BaseGridPagePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
