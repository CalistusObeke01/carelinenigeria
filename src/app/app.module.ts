import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatTabsModule} from '@angular/material/tabs';


import {GoTopButtonModule} from 'ng2-go-top-button';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ToastrModule} from 'ngx-toastr';
import {IndexComponent} from './public/index/index.component';
import {AccessModule} from './access/access.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


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
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
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
    // ContactModule,
    // SkinlabModule,
    // SharedModule,
    // HaircareModule,
    // TestimonialModule,
    // AboutModule,
    // DeepCleansingStripsModule,
    // NasalStripsModule,
    AccessModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // MessagesModule,
    // CleansersModule,
    // WaxStripsModule,
    // CcCreamsModule,
    // SunblocksModule,
    // BabyProductsModule,
    // GloveModule,
    // PerfumesModule,
    // SheaButtersModule,
    // CocoaButterModule,
    // SheaCocoaButterModule,
    // FaceScrubsModule,
    // FaceMasksModule,
    // JamaicanCastorOilModule,
    // ArganOilModule,
    // JojobaOilModule,
    // SweetAlmondOilModule,
    // TeaTreeOilModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
