import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotOvermapComponent } from './spot-overmap.component';

describe('SpotOvermapComponent', () => {
  let component: SpotOvermapComponent;
  let fixture: ComponentFixture<SpotOvermapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotOvermapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotOvermapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
