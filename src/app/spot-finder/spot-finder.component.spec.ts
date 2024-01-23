import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotFinderComponent } from './spot-finder.component';

describe('SpotFinderComponent', () => {
  let component: SpotFinderComponent;
  let fixture: ComponentFixture<SpotFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
