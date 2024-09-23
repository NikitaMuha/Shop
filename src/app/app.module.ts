import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DataModelModule } from './dataModel/data-model.module';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { SummaryComponent } from './components/summary/summary.component';
import { RouterModule } from '@angular/router';

const routes = RouterModule.forRoot([ 
  { path: "products", component: ProductListComponent } , 
  { path: "order", component: OrderDetailsComponent}, 
  { path: "summary/:id", component: SummaryComponent}, 
  { path: "", redirectTo: "/products", pathMatch: "full"} 
  ] ) ; 


@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    OrderDetailsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataModelModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
