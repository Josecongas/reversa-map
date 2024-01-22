import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotsSidebarFilterComponent } from './spots-sidebar-filter.component';

describe('SpotsSidebarFilterComponent', () => {
  let component: SpotsSidebarFilterComponent;
  let fixture: ComponentFixture<SpotsSidebarFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotsSidebarFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotsSidebarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
