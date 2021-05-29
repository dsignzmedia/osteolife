import { Component } from '@angular/core';
import {MenuController} from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public header : any = 0;
  constructor(public menu:MenuController,public storage:Storage) {}
  async ngOnInit() {
    await this.storage.create();
    await this.storage.get('auth').then((val) => {
      console.log('AppComponent');
      console.log(val);
      if(val == 'true'){
        this.header = 1;
      }
    });
  }
  openmenu(){
    this.menu.enable(true, 'primary');
    this.menu.toggle();
    // this.menu.open('primary');
  }
}
