import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestProcedurePage } from './request-procedure.page';

const routes: Routes = [
  {
    path: '',
    component: RequestProcedurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestProcedurePageRoutingModule {}
