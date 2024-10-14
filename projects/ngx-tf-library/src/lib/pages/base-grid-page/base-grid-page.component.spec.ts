import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseGridPageComponent } from './base-grid-page.component';

describe('BaseGridPageComponent', () => {
  let component: BaseGridPageComponent;
  let fixture: ComponentFixture<BaseGridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseGridPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
