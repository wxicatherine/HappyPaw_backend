import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAccount1PageRoutingModule } from './create-account-1-routing.module';

import { CreateAccount1Page } from './create-account-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAccount1PageRoutingModule,
    CreateAccount1Page
  ],
  declarations: []
})
export class CreateAccount1PageModule {}