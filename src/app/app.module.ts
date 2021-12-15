import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GiftGivingComponent } from './components/gift-giving/gift-giving.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GiftEntryComponent } from './components/gift-giving/gift-entry/gift-entry.component';
import { GiftListComponent } from './components/gift-giving/gift-list/gift-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GiftDataService } from 'src/services/gift-data.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GiftGivingComponent,
    DashboardComponent,
    NavigationComponent,
    GiftEntryComponent,
    GiftListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [GiftDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
