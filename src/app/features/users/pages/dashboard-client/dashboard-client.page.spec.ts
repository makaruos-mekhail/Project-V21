import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClientPage } from './dashboard-client.page';

describe('DashboardClientPage', () => {
  let component: DashboardClientPage;
  let fixture: ComponentFixture<DashboardClientPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardClientPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClientPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
