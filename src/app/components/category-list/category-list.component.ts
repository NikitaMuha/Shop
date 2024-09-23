import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {

@Input() 
selected: string = "" 


@Input() 
categories: string[] = []; 


@Output() 
selectCategory = new EventEmitter<string>(); 


getBtnClass(category: string): string { 
return "btn btn-bock" + 
(category === this.selected? "btn-primary" : "btn-secondary"); 
}
}
