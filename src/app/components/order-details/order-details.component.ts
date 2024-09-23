import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from '../../../services/data-source.service';
import { Order } from '../../../interfaces/enteties';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  constructor(private dataSource: DataSourceService, private router: Router) {}

  get order() : Order { 
  return this.dataSource.order; 
  } 

  submit() { 
  this.dataSource.storeOrder().subscribe(id => 
  this.router.navigateByUrl(`/summary/${id}`)); 
  }
}
