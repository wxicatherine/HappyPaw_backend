<<<<<<< HEAD:reciclica-app/src/app/pages/login/login-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPassword3Page } from './forgot-password-3.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPassword3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPassword3PageRoutingModule {}
>>>>>>> 5264763 (Create page Create-account-1, page Forgot-password-1,2,3,4. Design this):reciclica-app/src/app/pages/forgot-password-3/forgot-password-3-routing.module.ts
