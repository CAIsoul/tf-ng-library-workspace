import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPlaygroundComponent } from './navbar-playground.component';

describe('NavbarPlaygroundComponent', () => {
  let component: NavbarPlaygroundComponent;
  let fixture: ComponentFixture<NavbarPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarPlaygroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
