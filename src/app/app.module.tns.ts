import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-router/app-routing.module.tns';
import { AppComponent } from '@src/app/app.component';
import { AutoGeneratedComponent } from '@src/app/auto-generated/auto-generated.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { Globals } from '@src/app/globals';
import { HttpHelper } from '@src/app/services/http.helper.service';

import { AdminModule } from '@src/app/admin/admin.module';
import { AdminRouterModule } from '@src/app/admin/admin-router/admin-router.module';
import { CustomerRouterModule } from '@src/app/customer/customer-router/customer-router.module';

import { ListTypeService } from '@src/app/services/listtypes.service';
import { ProductsService } from '@src/app/services/products.service';
import { ListingService } from '@src/app/services/listings.service';
import { SearchService } from '@src/app/services/search.service';
import { CategoryService } from '@src/app/services/categories.service';
import { AccountService } from '@src/app/services/accounts.service';
import { UserAccountsService } from '@src/app/services/userAccounts.service';
import { CartService } from '@src/app/services/cart.service';
import { OrderService } from '@src/app/services/orders.service';
import { LoginService } from '@src/app/services/login.service';
import { SessionService } from '@src/app/services/session.service';
import { UtilityService } from '@src/app/services/utilities.service';
import { UserNoteService } from '@src/app/services/userNotes.service';
import { AuthorizationGuard } from '@src/app/guards/authorization.guard';
import { ProductsResolve } from '@src/app/guards/products-resolve.guard';
import { EmploymentService } from '@src/app/services/employment.service';

import { AboutUsComponent } from '@src/app/about-us/about-us.component';
import { HomeComponent } from '@src/app/home/home.component';
import { ProductsListComponent } from '@src/app/products-list/products-list.component';
import { ProductComponent } from '@src/app/product/product.component';
import { ProductsSliceComponent } from '@src/app/products-slice/products-slice.component';
import { ContactUsComponent } from '@src/app/contact-us/contact-us.component';
import { LoginComponent } from '@src/app/login/login.component';
import { RegisterComponent } from '@src/app/register/register.component';
import { CategoriesComponent } from '@src/app/categories/categories.component';
import { NewsFeedComponent } from '@src/app/news-feed/news-feed.component';
import { SearchResultsComponent } from '@src/app/search-results/search-results.component';
import { CategoryListComponent } from '@src/app/category-list/category-list.component';
import { NavigationComponent } from '@src/app/navigation/navigation.component';
import { ProductSliceComponent } from '@src/app/product-slice/product-slice.component';
import { CardsCarouselComponent } from '@src/app/cards-carousel/cards-carousel.component';
import { ProductSlideComponent } from '@src/app/product-slide/product-slide.component';
import { ShippingComponent } from '@src/app/shipping/shipping.component';
import { SimilarsComponent } from '@src/app/similars/similars.component';
import { FooterMainComponent } from '@src/app/footer-main/footer-main.component';
import { ReturnsComponent } from '@src/app/returns/returns.component';
import { LegalComponent } from '@src/app/legal/legal.component';
import { RatingsComponent } from '@src/app/ratings/ratings.component';
import { SpinnerComponent } from '@src/app/spinner/spinner.component';
import { TermsOfUseComponent } from '@src/app/terms-of-use/terms-of-use.component';
import { PrivacyComponent } from '@src/app/privacy/privacy.component';
import { ShippingInfoComponent } from '@src/app/shipping-info/shipping-info.component';
import { CustomerModule } from '@src/app/customer/customer.module';
import { FeedCardComponent } from '@src/app/feed-card/feed-card.component';
import { StripHtmlTagsPipe } from '@src/app/strip-html-tags/strip-html-tags.pipe';
import { ReydavidComponent } from '@src/app/reydavid/reydavid.component';
import { ReviewComponent } from '@src/app/review/review.component';
import { EmploymentComponent } from '@src/app/employment/employment.component';
import { FeaturesComponent } from '@src/app/features/features.component';
import { CareMenuComponent } from '@src/app/care-menu/care-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    AutoGeneratedComponent,
    AboutUsComponent,
    HomeComponent,
    ProductsListComponent,
    ProductComponent,
    ProductsSliceComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent,
    NewsFeedComponent,
    SearchResultsComponent,
    CategoryListComponent,
    NavigationComponent,
    ProductSliceComponent,
    CardsCarouselComponent,
    ProductSlideComponent,
    ShippingComponent,
    SimilarsComponent,
    FooterMainComponent,
    ReturnsComponent,
    LegalComponent,
    RatingsComponent,
    SpinnerComponent,
    TermsOfUseComponent,
    PrivacyComponent,
    ShippingInfoComponent,
    FeedCardComponent,
    StripHtmlTagsPipe,
    ReydavidComponent,
    ReviewComponent,
    EmploymentComponent,
    FeaturesComponent,
    CareMenuComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    AdminModule, 
    AdminRouterModule,
    CustomerModule,
    CustomerRouterModule
  ],
  providers: [
    Globals, 
    HttpHelper,
    ListTypeService, 
    ProductsService, 
    ListingService, 
    SearchService,
    CategoryService, 
    AccountService, 
    UserAccountsService, 
    CartService, 
    OrderService, 
    LoginService, 
    SessionService, 
    UserNoteService, 
    UtilityService, 
    EmploymentService,
    AuthorizationGuard, 
    ProductsResolve
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
