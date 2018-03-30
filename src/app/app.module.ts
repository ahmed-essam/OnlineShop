import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';

import { LoginService } from './login.service';
import { OrderService } from './seller/orders/order.service';
import { OrderDetailsService } from './seller/orderdetails/order-details.service';
import { CategoriesService } from './categories.service';
import { AddproductService } from './addproduct.service';
import { EditproductService } from './editproduct.service';
import { MyproductsService } from './myproducts.service';
import {ProductsService} from './products.service';
import { CartService } from './cart.service';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog} from '@angular/material/dialog';

import {  ReactiveFormsModule ,FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
 import { HomeComponent } from './customer/home/home.component';
import { ProductsComponent } from './customer/products/products.component';
import { ProductComponent } from './customer/product/product.component';
import { CartComponent } from './customer/cart/cart.component';
import { OrdersComponent } from './seller/orders/orders.component';
import { OrderdetailsComponent } from './seller/orderdetails/orderdetails.component';
import { MyproductsComponent } from './seller/myproducts/myproducts.component';
import { AddproductComponent } from './seller/addproduct/addproduct.component';
import { EditprofileComponent } from './auth/editprofile/editprofile.component';
import { EditproductComponent } from './seller/editproduct/editproduct.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products/:cat', component: ProductsCatComponent},
  {path: 'products/cat/:subcat', component: ProductsSubCatComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order/:id', component: OrderdetailsComponent},
  {path: 'products/add', component: AddproductComponent},
  {path: 'profile/edit', component: EditprofileComponent},
  {path: 'product/edit/:id', component: EditproductComponent},
  {path: 'search/:keyword', component: SearchComponent},
  {path: 'product/edit/:id', component: EditproductComponent},
  {path: 'product/list/:id', component: MyproductsComponent},
  {path: 'search/:keyword', component: HomeComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    OrdersComponent,
    OrderdetailsComponent,
    MyproductsComponent,
    AddproductComponent,
    EditprofileComponent,
    EditproductComponent,
    SearchComponent,
    HeaderComponent,
    SidebarComponent,  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    HttpHeaders,
    HttpResponse,
    FormsModule  
  ],
  providers: [LoginService, CategoriesService, OrderService , OrderDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
