import { Component } from '@angular/core';
import {MenuController} from '@ionic/angular'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public menu:MenuController) {}
  openmenu(){
    this.menu.enable(true, 'primary');
    this.menu.toggle();
    // this.menu.open('primary');
  }
}
