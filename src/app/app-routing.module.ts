import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { ReqresComponent } from './reqres/components/reqres/reqres.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ThirdGuard } from './shared/guards/third.guard';
import { firstGuard } from './shared/guards/first.guard';
import { CustomersPageComponent } from './customers/components/customers-page/customers-page.component';
import { LoginComponent } from './auth/components/login/login.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';

const routes: Routes = [
  {path: "products", component: ProductsPageComponent, canActivate: [firstGuard]},
  {path: "products/:id", component: ProductDetailsComponent, canActivate: [firstGuard]},
  {path: "customers",component: CustomersPageComponent, canActivate: [firstGuard]},
  {path: "login", component:LoginComponent},
  {path: "welcome", component:WelcomeComponent},
  {path: "reqres", component: ReqresComponent, canActivate: [firstGuard]},
  {path:"", redirectTo: "welcome", pathMatch: "full"},
  {path:"**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
