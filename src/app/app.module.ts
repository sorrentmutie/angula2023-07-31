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
import { HttpClientModule } from '@angular/common/http';
import { ReqresComponent } from './reqres/components/reqres/reqres.component';
import { CardComponent } from './reqres/components/card/card.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
