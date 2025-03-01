import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassword4PageRoutingModule } from './forgot-password-4-routing.module';

import { ForgotPassword4Page } from './forgot-password-4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassword4PageRoutingModule,
    ForgotPassword4Page
  ],
  declarations: []
})
export class ForgotPassword4PageModule {}
