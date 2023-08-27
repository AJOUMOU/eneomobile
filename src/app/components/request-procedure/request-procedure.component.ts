import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-request-procedure',
  templateUrl: './request-procedure.component.html',
  styleUrls: ['./request-procedure.component.scss'],
})
export class RequestProcedureComponent  implements OnInit {
  selectedFile: File | null = null;
  name: string = '';
  selectedOption: any;
  definiteValue:string[] = [];
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];


  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  ngOnInit() {}
 
  onOptionSelected(event: any) {
    const selectedValue: string  = event.detail.value;
    if (selectedValue !== null && selectedValue !== undefined) {
      // Handle the selected value
      this.options = this.options.filter(option => option !== selectedValue);
    }
    if(selectedValue!=undefined || selectedValue != null){
      this.definiteValue.push(selectedValue);
    }
    console.log(selectedValue);
    
    console.log(this.definiteValue);
    return selectedValue;

  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      // Perform the file upload logic here
      console.log('File uploaded:', this.selectedFile);
      // You can call a service or use any other approach to upload the file
    } else {
      // No file selected
      console.log('No file selected.');
    }
  }
}
