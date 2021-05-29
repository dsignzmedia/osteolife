import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from '../api/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public storage: Storage,public service: UserService, private router: Router) { }

  async ngOnInit() {
    // set a key/value
    await this.storage.remove('age');
    await this.storage.set('age', 'Max');

  // Or to get a key/value pair
  await this.storage.get('age').then((val) => {
    console.log('Your Name is', val);
  });
  }
  login(form) {
    console.log(form.value);
     this.service.dologin(form.value).then( (response : any) => {
      console.log(response);
      this.storage.remove('auth');
      if(response.message == "Login Successfull"){
        this.storage.set('auth', 'true');
      }else{
        this.storage.set('auth', 'false');
      }
       this.router.navigate(['/tabs/home']);
       }).catch( error => {
     })
  }

}
