import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-view-restuarent',
  templateUrl: './view-restuarent.component.html',
  styleUrls: ['./view-restuarent.component.css']
})
export class ViewRestuarentComponent implements OnInit {

    restId:Number = 0
    restDetails:any={}
 constructor(private activateRoute:ActivatedRoute,private apiService:ApiService) { }

  ngOnInit(): void {
    //to get parameter from url
    this.activateRoute.params.subscribe((result)=>{
     
      this.restId=result['id']
      console.log(this.restId);
      
    })

    //call api to get single restaurent
    this.apiService.viewRestaurent(this.restId)
    .subscribe((result)=>{
      this.restDetails=result
      console.log(this.restDetails);
    })
    
    
   
      
    
  }

}

// .................NOTE.........................
// Activate routes - it will provide informations about route associated with components ie loaded in an outlet