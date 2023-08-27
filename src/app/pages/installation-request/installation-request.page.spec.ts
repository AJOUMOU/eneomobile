import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstallationRequestPage } from './installation-request.page';

describe('InstallationRequestPage', () => {
  let component: InstallationRequestPage;
  let fixture: ComponentFixture<InstallationRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InstallationRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
