import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  constructor(private activatedRoute: ActivatedRoute) {} 
  
get id(): string { 
return this.activatedRoute.snapshot.params["id"]; 
  }
}
