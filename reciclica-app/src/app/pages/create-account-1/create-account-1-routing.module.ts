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