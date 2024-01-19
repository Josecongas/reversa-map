import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersOvermapComponent } from './filters-overmap.component';

describe('FiltersOvermapComponent', () => {
  let component: FiltersOvermapComponent;
  let fixture: ComponentFixture<FiltersOvermapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersOvermapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersOvermapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
