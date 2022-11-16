import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboredPage } from './dashbored.page';

const routes: Routes = [
  {
    path: '',
    component: DashboredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboredPageRoutingModule {}
