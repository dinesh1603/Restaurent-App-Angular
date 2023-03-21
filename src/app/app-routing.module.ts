import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './items/components/add-item/add-item.component';
import { CartComponent } from './items/components/cart/cart.component';
import { ItemDetailsComponent } from './items/components/item-details/item-details.component';
import { ItemsComponent } from './items/components/items/items.component';
import { AdminHomeComponent } from './shared/components/admin-home/admin-home.component';
import { AdminLoginComponent } from './shared/components/admin-login/admin-login.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { OrderConfirmationComponent } from './shared/components/order-confirmation/order-confirmation.component';
import { UserLoginComponent } from './shared/components/user-login/user-login.component';
import { UserRegistrationComponent } from './shared/components/user-registration/user-registration.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: UserRegistrationComponent },
  { path: '', component: HomeComponent },
  { path: 'admin/items', component: AdminHomeComponent },
  { path: 'admin/items/add', component: AddItemComponent },
  { path: 'admin/items/:id', component: ItemDetailsComponent },
  { path: 'confirmation', component: OrderConfirmationComponent },
  
  { path: 'items/cart', component: CartComponent},
  {path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
