import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { WorkOrderDetailsComponent } from './work-order-details/work-order-details.component';
import { SiteEngineerComponent } from './SiteEngineers/site-engineer/site-engineer.component';
import { SiteEngineerWorkOrdersListComponent } from './SiteEngineers/site-engineer-work-orders-list/site-engineer-work-orders-list.component';
import { SiteEngineerWorkOrderDetailsComponent } from './SiteEngineers/site-engineer-work-order-details/site-engineer-work-order-details.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    WorkOrderListComponent,
    WorkOrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {};
 }
