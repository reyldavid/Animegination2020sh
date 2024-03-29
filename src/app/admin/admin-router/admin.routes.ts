import { Routes } from '@angular/router';
import { AdminGuard } from '../../guards/admin.guard';
import { GenreComponent } from '../genre/genre.component';
import { GenreEditComponent } from '../genre-edit/genre-edit.component';
import { GenreAddComponent } from '../genre-add/genre-add.component';
import { MediumComponent } from '../medium/medium.component';
import { MediumEditComponent } from '../medium-edit/medium-edit.component';
import { MediumAddComponent } from '../medium-add/medium-add.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { PublisherComponent } from '../publisher/publisher.component';
import { ListingComponent } from '../listing/listing.component';
import { CustomerNoteComponent } from '../customer-note/customer-note.component';
import { UserFeedbackComponent } from '../user-feedback/user-feedback.component';
import { PublisherEditComponent } from '../publisher-edit/publisher-edit.component';
import { PublisherAddComponent } from '../publisher-add/publisher-add.component';
import { UserInfoEditComponent } from '../user-info-edit/user-info-edit.component';
import { ProductInfoEditComponent } from '../product-info-edit/product-info-edit.component';
import { ProductInfoAddComponent } from '../product-info-add/product-info-add.component';
import { ListTypeComponent } from '../list-type/list-type.component';
import { ListingEditComponent } from '../listing-edit/listing-edit.component';
import { ListingAddComponent } from '../listing-add/listing-add.component';
import { RecommendationsComponent } from '../recommendations/recommendations.component';
import { RecommendAddComponent } from '../recommend-add/recommend-add.component';

export const routes: Routes = [
  { path: 'medium', component: MediumComponent, canActivate: [AdminGuard] }, 
  { path: 'medium-edit', component: MediumEditComponent, canActivate: [AdminGuard] }, 
  { path: 'medium-add', component: MediumAddComponent, canActivate: [AdminGuard] }, 
  { path: 'genre', component: GenreComponent, canActivate: [AdminGuard] },
  { path: 'genre-edit', component: GenreEditComponent, canActivate: [AdminGuard] },
  { path: 'genre-add', component: GenreAddComponent, canActivate: [AdminGuard] },
  { path: 'user-info', component: UserInfoComponent, canActivate: [AdminGuard] },
  { path: 'user-info-edit', component: UserInfoEditComponent, canActivate: [AdminGuard] },
  { path: 'product-info', component: ProductInfoComponent, canActivate: [AdminGuard] }, 
  { path: 'product-info-edit', component: ProductInfoEditComponent, canActivate: [AdminGuard] },
  { path: 'product-info-add', component: ProductInfoAddComponent, canActivate: [AdminGuard] },
  { path: 'publisher', component: PublisherComponent, canActivate: [AdminGuard] }, 
  { path: 'publisher-edit', component: PublisherEditComponent, canActivate: [AdminGuard] },
  { path: 'publisher-add', component: PublisherAddComponent, canActivate: [AdminGuard] },
  { path: 'listing', component: ListingComponent, canActivate: [AdminGuard] }, 
  { path: 'listing-edit', component: ListingEditComponent, canActivate: [AdminGuard] }, 
  { path: 'listing-add', component: ListingAddComponent, canActivate: [AdminGuard] }, 
  { path: 'customer-note', component: CustomerNoteComponent, canActivate: [AdminGuard] }, 
  { path: 'user-feedback', component: UserFeedbackComponent, canActivate: [AdminGuard] },
  { path: 'list-type', component: ListTypeComponent, canActivate: [AdminGuard] },
  { path: 'recommends', component: RecommendationsComponent, canActivate: [AdminGuard] },
  { path: 'recommend-add', component: RecommendAddComponent, canActivate: [AdminGuard] }
]
