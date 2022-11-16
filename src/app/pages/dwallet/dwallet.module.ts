import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DwalletPageRoutingModule } from './dwallet-routing.module';

import { DwalletPage } from './dwallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DwalletPageRoutingModule
  ],
  declarations: [DwalletPage]
})
export class DwalletPageModule {}
