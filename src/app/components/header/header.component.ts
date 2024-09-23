import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../../interfaces/enteties';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() 
  order = new Order();
  
  @Output() 
  submit = new EventEmitter<void>(); 
  
  get headerText(): string { 
  
  let count = this.order.productCount; 
  return count === 0? "(No Selection)" 
  : `${ count } product(s), $${ this.order.total.toFixed(2)}`
  } 
}
