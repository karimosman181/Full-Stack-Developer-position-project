import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkOrderListComponent} from './work-order-list/work-order-list.component';
import {WorkOrderDetailsComponent} from './work-order-details/work-order-details.component'
import {AuthGuard} from './auth/auth.guard';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
  {path:'', component: WorkOrderListComponent},
  {path:'workOrderList', component: WorkOrderListComponent}
  ,{path:'workOrderDetails/:id', component: WorkOrderDetailsComponent}
  ,
  {
    path: 'SiteEngineer',
    loadChildren: () => import('./SiteEngineers/SiteEngineer.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
