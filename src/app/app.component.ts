import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'HOME', url: 'home', icon: 'grid' },
    { title: 'INSTALLATION REQUEST', url: 'installation-request', icon: 'file-tray-stacked' },
    { title: 'CHAT', url: 'chat', icon: 'chatbubbles' },
    { title: 'PROFILE', url: 'profile', icon: 'person' },
    { title: 'FEEDBACK', url: 'feedback', icon: 'information-circle' },
    { title: 'trash', url: '', icon: 'trash' },
  ];
  public labels = [ 'Log-out'];
  constructor() {}
}
