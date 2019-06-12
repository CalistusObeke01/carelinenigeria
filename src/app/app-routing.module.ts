import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {IndexComponent} from './public/index/index.component';

const routes: Routes = [
  {path: 'careline', children: [
      {path: '', component: IndexComponent, children: [
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          {path: 'home', component: HomeComponent,
          data: {
            title: ' - OFFICIAL HOMEPAGE',
            description: `Caline/skinlab brands are top notch cosmestics products dermatologically tested and designed
            to cater for all skin types.Derma diagonises and recommendation, treatment of skin and skin related diseases,
             skin care, hair beauty, fragrance, make up. Our services cuts accross beauty spars, saloons, phermacies,
             hospitals, supermarkets etc. we are represented in all states through our
            distributors. We also have our branded shops close to you. Baby Rash diaper rash treatment is a
            hypoallergenic cream that can be applied
            on all skin types.`,
            keywords: `services, products, Growth, Inhibitor Cream, Shea Butter, Cucumber and Mint, Baby Diaper Rash Cream,
            hair care, sunscreen, argan oil, gloves, perfumes, cleansers
             natural hair inhibitor system, male pattern baldness`,
            author: 'Obeke Calistus'
          }
          },
        ]
      },
      {
        path: 'access',
        loadChildren: './access/access.module#AccessModule',
      },
      {path: 'products/babyline', loadChildren: './baby-product/baby-products.module#BabyProductsModule'},
      {path: 'products/cc-cream', loadChildren: './cc-cream/cc-creams.module#CcCreamsModule'},
      {path: 'products/cleansers', loadChildren: './cleanser/cleansers.module#CleansersModule'},
      {path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
      { path: 'products/deep-cleansing-strips',
        loadChildren: './deep-cleansing-strips/deep-cleansing-strips.module#DeepCleansingStripsModule'},
      {path: 'products/glove', loadChildren: './glove/glove.module#GloveModule'},
      {path: 'products/haircare', loadChildren: './haircare/haircare.module#HaircareModule'},
      {path: 'products/nasal-strips', loadChildren: './nasal-strips/nasal-strips.module#NasalStripsModule'},
      {path: 'products/skinlab', loadChildren: './skinlabproducts/skinlab/skinlab.module#SkinlabModule'},
      {path: 'products/sunblock', loadChildren: './sunblock/sunblocks.module#SunblocksModule'},
      {path: 'testimonial', loadChildren: './testimonial/testimonial.module#TestimonialModule'},
      {path: 'products/wax-strips', loadChildren: './wax-strip/wax-strips.module#WaxStripsModule'},
      {path: 'about', loadChildren: './about/about.module#AboutModule'},
      {path: 'products/argan-oil', loadChildren: './organics/argan-oil/argan-oil.module#ArganOilModule'},
      {path: 'products/cocoa-butter', loadChildren: './organics/cocoa-butter/cocoa-butter.module#CocoaButterModule'},
      {path: 'products/face-masks', loadChildren: './organics/face-mask/face-masks.module#FaceMasksModule'},
      {path: 'products/face-scrubs', loadChildren: './organics/face-scrub/face-scrubs.module#FaceScrubsModule'},
      { path: 'products/jamaican-castor-oil',
        loadChildren: './organics/jamaican-castor-oil/jamaican-castor-oil.module#JamaicanCastorOilModule'},
      {path: 'products/jojoba-oil', loadChildren: './organics/jojoba-oil/jojoba-oil.module#JojobaOilModule'},
      {path: 'products/shea-butters', loadChildren: './organics/shea-butter/shea-butters.module#SheaButtersModule'},
      {path: 'products/shea-cocoa-butters', loadChildren: './organics/shea-cocoa-butter/shea-cocoa-butter.module#SheaCocoaButterModule'},
      {path: 'products/sweet-almond-oil', loadChildren: './organics/sweet-almond-oil/sweet-almond-oil.module#SweetAlmondOilModule'},
      {path: 'products/tea-tree-oil', loadChildren: './organics/tea-tree-oil/tea-tree-oil.module#TeaTreeOilModule'},
      {path: 'products/perfumes', loadChildren: './perfume/perfumes.module#PerfumesModule'},
    ]},
  {
    path: '', redirectTo: 'careline', pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
