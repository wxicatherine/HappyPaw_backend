import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-4',
  templateUrl: './forgot-password-4.page.html',
  styleUrls: ['./forgot-password-4.page.scss'],
  imports: [
    IonicModule
  ]
})
export class ForgotPassword4Page {

  constructor(private router: Router) { }
    
    
      goSignIn2() {
        this.router.navigate(['/sign-in-2']);
    }

}
