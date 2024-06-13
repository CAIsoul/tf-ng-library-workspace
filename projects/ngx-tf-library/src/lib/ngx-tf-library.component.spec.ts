import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTfLibraryComponent } from './ngx-tf-library.component';

describe('NgxTfLibraryComponent', () => {
  let component: NgxTfLibraryComponent;
  let fixture: ComponentFixture<NgxTfLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTfLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTfLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
