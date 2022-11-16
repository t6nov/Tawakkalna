import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'main',
        loadChildren: () => import('../../pages/main/main.module').then( m => m.MainPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('../services/services.module').then( m => m.ServicesPageModule)
      },
      {
        path: 'dwallet',
        loadChildren: () => import('../../pages/dwallet/dwallet.module').then( m => m.DwalletPageModule)
      },
      {
        path: 'dashbored',
        loadChildren: () => import('../../pages/dashbored/dashbored.module').then( m => m.DashboredPageModule)
      },
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
