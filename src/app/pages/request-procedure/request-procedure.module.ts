import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestProcedurePageRoutingModule } from './request-procedure-routing.module';

import { RequestProcedurePage } from './request-procedure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestProcedurePageRoutingModule
  ],
  declarations: [RequestProcedurePage]
})
export class RequestProcedurePageModule {}
