import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestProcedurePage } from './request-procedure.page';

describe('RequestProcedurePage', () => {
  let component: RequestProcedurePage;
  let fixture: ComponentFixture<RequestProcedurePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RequestProcedurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
