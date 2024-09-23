import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../interfaces/enteties';


export type productSelection = { 
  product: Product, 
  quantity: number 
  }

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  quantity: number = 1; 

  @Input() 
  product: Product = { 
  id: 0, name:'', description:'' , category:'' , price: 0 
  } 
  
  
  @Output() 
  addToCart = new EventEmitter<productSelection>(); 
  
  handleAddToCart() { 
  this.addToCart.emit({ product: this.product, 
    quantity: Number(this.quantity)}); 
  } 
}
