import { NgModule } from '@angular/core';
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
  ]
})
export class CustomerModule { }
