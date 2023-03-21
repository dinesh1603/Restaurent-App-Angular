import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ItemsComponent } from './items/components/items/items.component';
import { AddItemComponent } from './items/components/add-item/add-item.component';
import { ItemDetailsComponent } from './items/components/item-details/item-details.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './shared/components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './items/components/cart/cart.component';
import { AdminHomeComponent } from './shared/components/admin-home/admin-home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FilterPipe } from './items/pipes/filter.pipe';
import { UserLoginComponent } from './shared/components/user-login/user-login.component';
import { UserRegistrationComponent } from './shared/components/user-registration/user-registration.component';
import { AdminLoginComponent } from './shared/components/admin-login/admin-login.component';
import { OrderConfirmationComponent } from './shared/components/order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ItemsComponent,
    AddItemComponent,
    ItemDetailsComponent,
    SliderComponent,
    CartComponent,
    AdminHomeComponent,
    FilterPipe,
    UserLoginComponent,
    UserRegistrationComponent,
    AdminLoginComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
