import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-3',
  templateUrl: './forgot-password-3.page.html',
  styleUrls: ['./forgot-password-3.page.scss'],
  imports: [
    IonicModule
  ]
})
export class ForgotPassword3Page  {

  constructor(private router: Router) { }
  
  
    goForgotPassword4() {
      this.router.navigate(['/forgot-password-4']);
    }
  
    goSignIn() {
      this.router.navigate(['/sign-in-2']);
  }
}