import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassword3PageRoutingModule } from './forgot-password-3-routing.module';

import { ForgotPassword3Page } from './forgot-password-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD:reciclica-app/src/app/pages/login1/login1.module.ts
    Login1PageRoutingModule,
    Login1Page,
=======
    ForgotPassword3PageRoutingModule,
    ForgotPassword3Page
>>>>>>> 5264763 (Create page Create-account-1, page Forgot-password-1,2,3,4. Design this):reciclica-app/src/app/pages/forgot-password-3/forgot-password-3.module.ts
  ],
  declarations: [],
})
export class ForgotPassword3PageModule {}
