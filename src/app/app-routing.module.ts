import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { ReqresComponent } from './reqres/components/reqres/reqres.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ThirdGuard } from './shared/guards/third.guard';
import { firstGuard } from './shared/guards/first.guard';

const routes: Routes = [
  {path: "products", component: ProductsPageComponent},
  {path: "products/:id", component: ProductDetailsComponent},
  {path: "reqres", component: ReqresComponent, canActivate: [firstGuard]},
  {path:"", redirectTo: "products", pathMatch: "full"},
  {path:"**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
