import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { LoginComponent } from './components/login/login.component';
import { StoreComponent } from './components/store/store.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { AdminGuard} from './admin.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'admin', component: AdminpanelComponent, canActivate: [AdminGuard]
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'store', component: StoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
