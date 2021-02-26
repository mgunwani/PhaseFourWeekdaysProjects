import { applicationRoute } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { EmployeeServiceComponent } from './employee-service/employee-service.component';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    PageNotFoundComponent,
    CustomerServiceComponent,
    EmployeeServiceComponent,
    CustomerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoute)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
