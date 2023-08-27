import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestProcedureComponent } from 'src/app/components/request-procedure/request-procedure.component';

@Component({
  selector: 'app-installation-request',
  templateUrl: './installation-request.page.html',
  styleUrls: ['./installation-request.page.scss'],
})
export class InstallationRequestPage implements OnInit {
  message:string = "";

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  public actionSheetButtons = [
    {
      text: 'create new request',
      cssClass:'action-sheet-button',
      data: {
        action: 'delete',
      },
      handler:()=>{this.openModal()},
    
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: RequestProcedureComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }
}
