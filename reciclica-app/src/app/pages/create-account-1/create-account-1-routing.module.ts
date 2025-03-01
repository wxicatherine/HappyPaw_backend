<<<<<<< HEAD:reciclica-app/src/app/pages/home/home-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccount1Page } from './create-account-1.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAccount1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAccount1PageRoutingModule {}
>>>>>>> 5264763 (Create page Create-account-1, page Forgot-password-1,2,3,4. Design this):reciclica-app/src/app/pages/create-account-1/create-account-1-routing.module.ts
