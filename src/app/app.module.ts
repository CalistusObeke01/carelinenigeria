import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatTabsModule } from '@angular/material/tabs';


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
import { AccessModule } from './access/access.module';


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
    MatTabsModule,
    ContactModule,
    SkinlabModule,
    SharedModule,
    HaircareModule,
    TestimonialModule,
    AboutModule,
    DeepCleansingStripsModule,
    NasalStripsModule,
    AccessModule,
    AppRoutingModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
