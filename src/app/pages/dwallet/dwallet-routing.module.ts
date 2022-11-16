import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DwalletPage } from './dwallet.page';

const routes: Routes = [
  {
    path: '',
    component: DwalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DwalletPageRoutingModule {}
