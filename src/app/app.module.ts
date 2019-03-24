import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatTabsModule } from '@angular/material/tabs';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HaircareData } from './haircare/haircare-data';
import { DeepCleansingStripsData } from './deep-cleansing-strips/deep-cleansing-strips-data';
import { NasalStripsData } from './nasal-strips/nasal-strips-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactModule } from './contact/contact.module';
import { SkinlabModule } from './skinlabproducts/skinlab/skinlab.module';
import { SharedModule } from './shared/shared.module';
import { HaircareModule } from './haircare/haircare.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { AboutModule } from './about/about.module';
import { DeepCleansingStripsModule } from './deep-cleansing-strips/deep-cleansing-strips.module';
import { NasalStripsModule } from './nasal-strips/nasal-strips.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    InMemoryWebApiModule.forRoot(DeepCleansingStripsData , { delay: 1000 }),
    // InMemoryWebApiModule.forRoot(NasalStripsData , { delay: 1000 }),
    // InMemoryWebApiModule.forRoot(HaircareData , { delay: 1000 }),
    MatTabsModule,
    ContactModule,
    SkinlabModule,
    SharedModule,
    HaircareModule,
    TestimonialModule,
    AboutModule,
    DeepCleansingStripsModule,
    NasalStripsModule,
    AppRoutingModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
