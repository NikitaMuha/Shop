import { Component } from '@angular/core';
import { Product } from '../../../interfaces/enteties';
import { DataSourceService } from '../../../services/data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  selectedCategory = "All"; 

  constructor(public dataSource: DataSourceService, private router: Router) {}
  
  get products(): Product[] { 
  
  return this.dataSource.getProducts("id", 
  this.selectedCategory === "All" 
  ? undefined : this.selectedCategory); 
  }
  
  get categories(): string[] { 
  return ["All", ... this.dataSource.getCategories()]; 
  } 
  
  handleCategorySelect(category: string) { 
  this.selectedCategory = category; 
  } 
  
  handleAdd(data: {product: Product, quantity: number}) { 
  this.dataSource.order.addProduct(data.product, data.quantity); 
  } 
  
  handleSubmit() { 
    this.router.navigateByUrl("/order"); 
  } 
}
