import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

// Swiper config. Register()
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
register();

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    CatalogoComponent,
    NavComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
