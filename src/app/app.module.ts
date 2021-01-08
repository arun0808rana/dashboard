import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OngoingApplicationsComponent } from './components/ongoing-applications/ongoing-applications.component';
import { OppurtunitiesComponent } from './components/oppurtunities/oppurtunities.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LHSComponent } from './components/lhs/lhs.component';
import { ContactNowComponent } from './components/contact-now/contact-now.component';
import { BoxPillsComponent } from './components/box-pills/box-pills.component';

@NgModule({
  declarations: [
    AppComponent,
    OngoingApplicationsComponent,
    OppurtunitiesComponent,
    NotificationsComponent,
    DashboardComponent,
    LHSComponent,
    ContactNowComponent,
    BoxPillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
