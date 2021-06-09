import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesInterestComponent } from './files-interest.component';

describe('FilesInterestComponent', () => {
  let component: FilesInterestComponent;
  let fixture: ComponentFixture<FilesInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
