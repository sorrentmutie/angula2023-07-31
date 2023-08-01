import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { ReqresComponent } from './reqres/components/reqres/reqres.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: "products", component: ProductsPageComponent},
  {path: "reqres", component: ReqresComponent},
  {path:"", redirectTo: "products", pathMatch: "full"},
  {path:"**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
