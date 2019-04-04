import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatTabsModule } from '@angular/material/tabs';


import { GoTopButtonModule } from 'ng2-go-top-button';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

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
import { MessagesModule } from './messages/messages.module';
import { CleansersModule } from './cleanser/cleansers.module';
import { WaxStripsModule } from './wax-strip/wax-strips.module';
import { CcCreamsModule } from './cc-cream/cc-creams.module';
import { SunblocksModule } from './sunblock/sunblocks.module';
import { BabyProductsModule } from './baby-product/baby-products.module';
import { GloveModule } from './glove/glove.module';
import {ToastrModule} from 'ngx-toastr';
import { IndexComponent } from './public/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    SlimLoadingBarModule,
    GoTopButtonModule,
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
    MessagesModule,
    CleansersModule,
    WaxStripsModule,
    CcCreamsModule,
    SunblocksModule,
    BabyProductsModule,
    GloveModule,
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
