import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {IndexComponent} from './public/index/index.component';


const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {title: 'Home Page'}
      },
      { path: '', redirectTo: 'home', pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
