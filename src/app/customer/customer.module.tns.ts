import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CustomerRouterModule } from './customer-router/customer-router.module';

import { AccountInfoComponent } from '../customer/account-info/account-info.component';
import { AccountSettingsComponent } from '../customer/account-settings/account-settings.component';
import { ShoppingCartComponent } from '../customer/shopping-cart/shopping-cart.component';
import { ProfileSettingsComponent } from '../customer/profile-settings/profile-settings.component';
import { AddressSettingsComponent } from '../customer/address-settings/address-settings.component';
import { CartItemComponent } from '../customer/cart-item/cart-item.component';
import { WishListComponent } from '../customer/wish-list/wish-list.component';
import { BuyListComponent } from '../customer/buy-list/buy-list.component';
import { CheckoutAddressComponent } from '../customer/checkout-address/checkout-address.component';
import { SubtotalsComponent } from '../customer/subtotals/subtotals.component';
import { CheckoutReviewComponent } from '../customer/checkout-review/checkout-review.component';
import { CheckoutThankyouComponent } from '../customer/checkout-thankyou/checkout-thankyou.component';
import { OrdersDetailsComponent } from '../customer/orders-details/orders-details.component';
import { OrdersSummaryComponent } from '../customer/orders-summary/orders-summary.component';
import { OrderItemComponent } from '../customer/order-item/order-item.component';
import { OrdersListComponent } from '../customer/orders-list/orders-list.component';
import { ProductReviewComponent } from '../customer/product-review/product-review.component';
import { UserNoteComponent } from '../customer/user-note/user-note.component';
import { FooterProductComponent } from '../customer/footer-product/footer-product.component';
import { StarRatingComponent } from '../customer/star-rating/star-rating.component';
import { FeedbackComponent } from '../customer/feedback/feedback.component';
import { HistoryComponent } from '../customer/history/history.component';

@NgModule({
  imports: [
    NativeScriptHttpClientModule,
    NativeScriptCommonModule,
    FormsModule, ReactiveFormsModule, 
    AngularFontAwesomeModule,
    CustomerRouterModule
  ],
  declarations: [
  AccountInfoComponent,
  AccountSettingsComponent,
  ShoppingCartComponent,
  ProfileSettingsComponent,
  AddressSettingsComponent,
  CartItemComponent,
  WishListComponent,
  BuyListComponent,
  CheckoutAddressComponent,
  SubtotalsComponent,
  CheckoutReviewComponent,
  CheckoutThankyouComponent,
  OrdersDetailsComponent,
  OrdersSummaryComponent,
  OrderItemComponent,
  OrdersListComponent,
  ProductReviewComponent,
  UserNoteComponent,
  FooterProductComponent,
  StarRatingComponent,
  FeedbackComponent,
  HistoryComponent],
  exports: [
    AccountInfoComponent,
    AccountSettingsComponent,
    ShoppingCartComponent,
    ProfileSettingsComponent,
    AddressSettingsComponent,
    CartItemComponent,
    WishListComponent,
    BuyListComponent,
    CheckoutAddressComponent,
    SubtotalsComponent,
    CheckoutReviewComponent,
    CheckoutThankyouComponent,
    OrdersDetailsComponent,
    OrdersSummaryComponent,
    OrderItemComponent,
    OrdersListComponent,
    ProductReviewComponent,
    UserNoteComponent,
    FooterProductComponent,
    FeedbackComponent,
    HistoryComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CustomerModule { }
