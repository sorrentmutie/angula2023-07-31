import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './shared/first/first.component';
import { SecondComponent } from './shared/second/second.component';
import { ThirdComponent } from './shared/third/third.component';
import { FourthComponent } from './shared/fourth/fourth.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { ProductsTableComponent } from './products/components/products-table/products-table.component';
import { ProductPipe } from './products/pipes/product.pipe';
import { AddressPipe } from './products/pipes/address.pipe';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReqresComponent } from './reqres/components/reqres/reqres.component';
import { CardComponent } from './reqres/components/card/card.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FirstInterceptor } from './shared/interceptors/first.interceptor';
import { SecondInterceptor } from './shared/interceptors/second.interceptor';
import { CustomersPageComponent } from './customers/components/customers-page/customers-page.component';
import { LoginComponent } from './auth/components/login/login.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    ProductsPageComponent,
    ProductsTableComponent,
    ProductPipe,
    AddressPipe,
    ProductDetailsComponent,
    ReqresComponent,
    CardComponent,
    MenuComponent,
    FooterComponent,
    NotFoundComponent,
    CustomersPageComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
