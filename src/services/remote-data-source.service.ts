import { Injectable } from '@angular/core';
import { DataSourceimpl } from './data-source.service';
import { HttpClient } from '@angular/common/http';
import { Order, Product } from '../interfaces/enteties';
import { map, Observable } from 'rxjs';


// const protocol = "http"; 
// const hostname = "localhost"; 
// const port = 4600; 

const urls = { 
  // products: `${protocol}://${hostname}:${port}/products`, 
  // orders: `${protocol}://${hostname}:${port}/orders`,
  products: "/api/products", 
  orders: "/api/orders" 
}; 


@Injectable({
  providedIn: 'root'
})
export class RemoteDataSourceService extends DataSourceimpl {



  constructor(private http: HttpClient) {
    super();
  }

  loadProducts(): Observable<Product[]> { 
    return this.http.get<Product[]>(urls.products); 
    } 

    storeOrder(order: Order): Observable<number> { 
      let orderData = { 
      lines: [ ... order.orderlines.values()].map(ol => ({ 
      productld: ol.product.id, 
      productName: ol.product.name, 
      quantity: ol.quantity 
      }))}
      return this.http.post<{ id: number}>(urls.orders, orderData) 
      .pipe<number>(map(val => val.id)); 
}

}
