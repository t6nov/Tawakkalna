import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboredPageRoutingModule } from './dashbored-routing.module';

import { DashboredPage } from './dashbored.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboredPageRoutingModule
  ],
  declarations: [DashboredPage]
})
export class DashboredPageModule {}
