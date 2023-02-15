import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restuarents-list',
  templateUrl: './restuarents-list.component.html',
  styleUrls: ['./restuarents-list.component.css']
})
export class RestuarentsListComponent implements OnInit {
  //properties
   rest='All Restaurent Lists'

  //to hold restaurent list
  restaurentsLists:any=[]

lDate:any 

// create a variable to hold search term
searchTerm=""
//depentend injections
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.lDate=new Date
    // api call- asynchornous call-resolve state - subscribe()
    this.apiservice.getAllRestaurentsLists()
    .subscribe((result)=>{
      this.restaurentsLists=result
    console.log(this.restaurentsLists);
  })
  //To get search Term from apService
  this.apiservice.search.subscribe((data)=>{
console.log(data);
this.searchTerm=data
  })
  }

}

// .....................NOTE................................
//Obsrevable(rxjs libraries):resolves asynchornous call
// -resolve state(subscribe)
// -reject state(catch)
//...DATABINDING....
//    TYPES-(1)-one way binding-sharing data to one side at a time
//          --components(ts) to view(html) file
//STRING INTERPOLATION -syntax:{{class-property-name}} in html
//PROPERTY BINDING -syntax:[attribute]="class-property-name"
// view(HTML) to component(ts) file
//  event binding-(event-name)="function call"
// event binding using $event-(event-name)="function call( $event)" 
//         -(2)-two way binding

//------------ANGULAR DIRECTIVE------------------
  //definition:to multiplicate DOM
  //tpes-(1)component Directive
  //      (2)structural Directive- based on array length we can add/remove html elements from DOM
  //types-(1) *ngIf = "condition" put inside html elements
  //      (2) *ngFor = "let nameofvariable of array name"        
  //      (3)Attribute Directive- base on some value/property we set the style of HTML elements
