import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-restuarent',
  templateUrl: './add-restuarent.component.html',
  styleUrls: ['./add-restuarent.component.css']
})
export class AddRestuarentComponent implements OnInit {
 id:any;
 neighborhood:any;
 photograph:any;
 Monday:any;
 Tuesday:any;
 Wednesday:any;
 Thursday:any;
 Friday:any;
 Saturday:any;
 Sunday:any;
 Rname: any;
 address: any;
 cuisine_type: any;
 Cname: any;
 date: any;
 rating: any;
 comments: any;
 lat: any;
 lng: any;


  constructor(private apiservice:ApiService,private router:Router) { }

  ngOnInit(): void {
  }
  addProduct(){
    console.log(this.id);
    let newRestaurent={
    id:this.id,
    name:this.Rname,
    neighborhood:this.neighborhood,
    photograph:this.photograph,
    address:this.address,
    latlng:{
      lat:this.lat,
      lng:this.lng
    },
    cuisine_type:this.cuisine_type,
    operating_hours:{
      Monday:this.Monday,
      Tuesday:this.Tuesday,
      Wednesday:this.Wednesday,
      Thursday:this.Thursday,
      Friday:this.Friday,
      Saturday:this.Saturday,
      Sunday:this.Sunday
      
    },
    reviews:[
      {
        name:this.Cname,
        date:this.date,
        rating:this.rating,
        comments:this.comments
      }
    ]
  
    
    }    
    console.log(newRestaurent);
    this.apiservice.addRestaurent(newRestaurent)
    .subscribe(()=>{
      alert('Restaurent details added successfully!!!')
      this.router.navigateByUrl('')
    })
     
  }
}
