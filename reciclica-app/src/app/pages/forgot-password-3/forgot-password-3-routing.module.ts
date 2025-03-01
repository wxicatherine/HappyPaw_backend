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