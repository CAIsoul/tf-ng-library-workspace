import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendogridPlaygroundComponent } from './kendogrid-playground.component';

describe('KendogridPlaygroundComponent', () => {
  let component: KendogridPlaygroundComponent;
  let fixture: ComponentFixture<KendogridPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KendogridPlaygroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendogridPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
