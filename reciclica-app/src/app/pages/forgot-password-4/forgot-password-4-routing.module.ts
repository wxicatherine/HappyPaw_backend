import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPassword4Page } from './forgot-password-4.page';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD:reciclica-app/src/app/pages/login1/login1-routing.module.ts
    component: Login1Page,
  },
=======
    component: ForgotPassword4Page
  }
>>>>>>> 5264763 (Create page Create-account-1, page Forgot-password-1,2,3,4. Design this):reciclica-app/src/app/pages/forgot-password-4/forgot-password-4-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPassword4PageRoutingModule {}
