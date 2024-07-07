import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomKendogridComponent } from './custom-kendogrid.component';

describe('CustomKendogridComponent', () => {
  let component: CustomKendogridComponent;
  let fixture: ComponentFixture<CustomKendogridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomKendogridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomKendogridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
