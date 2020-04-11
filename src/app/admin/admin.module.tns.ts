import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DpDatePickerModule } from 'ng2-date-picker';
import { AdminRouterModule } from '../admin/admin-router/admin-router.module';

import { GenreComponent } from '../../app/admin/genre/genre.component';
import { GenreEditComponent } from '../../app/admin/genre-edit/genre-edit.component';
import { GenreAddComponent } from '../../app/admin/genre-add/genre-add.component';
import { MediumComponent } from '../../app/admin/medium/medium.component';
import { MediumEditComponent } from '../../app/admin/medium-edit/medium-edit.component';
import { MediumAddComponent } from '../../app/admin/medium-add/medium-add.component';
import { PublisherComponent } from '../../app/admin/publisher/publisher.component';
import { UserInfoComponent } from '../../app/admin/user-info/user-info.component';
import { ProductInfoComponent } from '../../app/admin/product-info/product-info.component';
import { ListingComponent } from '../../app/admin/listing/listing.component';
import { CustomerNoteComponent } from '../../app/admin/customer-note/customer-note.component';
import { UserFeedbackComponent } from '../../app/admin/user-feedback/user-feedback.component';
import { PublisherAddComponent } from '../../app/admin/publisher-add/publisher-add.component';
import { PublisherEditComponent } from '../../app/admin/publisher-edit/publisher-edit.component';
import { UserInfoEditComponent } from '../../app/admin/user-info-edit/user-info-edit.component';
import { ProductInfoEditComponent } from '../../app/admin/product-info-edit/product-info-edit.component';
import { ListingEditComponent } from '../../app/admin/listing-edit/listing-edit.component';
import { ListingAddComponent } from '../../app/admin/listing-add/listing-add.component';
import { ProductInfoAddComponent } from '../../app/admin/product-info-add/product-info-add.component';
import { ListTypeComponent } from '../../app/admin/list-type/list-type.component';
import { RecommendationsComponent } from '../../app/admin/recommendations/recommendations.component';
import { RecommendAddComponent } from '../../app/admin/recommend-add/recommend-add.component';
import { RecommendEditComponent } from '../../app/admin/recommend-edit/recommend-edit.component';
import { AdminGuard } from '../../app/guards/admin.guard';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    FormsModule, ReactiveFormsModule, AngularFontAwesomeModule, 
    AdminRouterModule, DpDatePickerModule,
    NativeScriptHttpClientModule
  ],
  declarations: [
  GenreComponent,
  GenreEditComponent,
  GenreAddComponent,
  MediumComponent,
  MediumEditComponent,
  MediumAddComponent,
  PublisherComponent,
  UserInfoComponent,
  ProductInfoComponent,
  ListingComponent,
  CustomerNoteComponent,
  UserFeedbackComponent,
  PublisherAddComponent,
  PublisherEditComponent,
  UserInfoEditComponent,
  ProductInfoEditComponent,
  ListingEditComponent,
  ListingAddComponent,
  ProductInfoAddComponent,
  ListTypeComponent,
  RecommendationsComponent,
  RecommendAddComponent,
  RecommendEditComponent
  ],
  providers: [
  AdminGuard
  ],
  exports: [
    NativeScriptHttpClientModule, 
    FormsModule, ReactiveFormsModule, AngularFontAwesomeModule,
    DpDatePickerModule,
    GenreComponent,
    GenreEditComponent, 
    GenreAddComponent,
    MediumComponent,
    MediumEditComponent,
    MediumAddComponent,
    PublisherComponent,
    UserInfoComponent,
    ProductInfoComponent,
    ListingComponent,
    CustomerNoteComponent,
    UserFeedbackComponent,
    RecommendationsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AdminModule { }
 