import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
// mock
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { MockDataService } from './services/mock-data.service';
import { SharedModule } from './shared/shared.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { MenuBarModule } from './shared/components/menu-bar/menu-bar.module';
import { LayoutComponent } from './layouts/layout/layout.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DataService } from './models/data-service';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FooterModule,
    MenuBarModule,
    OrganizationChartModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AccordionModule,
    PanelModule,
    ButtonModule
    //InMemoryWebApiModule.forRoot(MockDataService)
  ],
  exports: [
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
