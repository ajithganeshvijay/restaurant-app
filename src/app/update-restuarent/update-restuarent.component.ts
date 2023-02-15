import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-restuarent',
  templateUrl: './update-restuarent.component.html',
  styleUrls: ['./update-restuarent.component.css']
})
export class UpdateRestuarentComponent implements OnInit {

  restId:any;
  restDeatils:any={}
  constructor(private activatedroute:ActivatedRoute,private apiservice:ApiService,private router:Router) { }
//get restaurent id to be updated
  ngOnInit(): void {
    this.activatedroute.params.subscribe((result:any)=>{
      this.restId=result['id']
      console.log(this.restId);
      
    })
    //fetch datails of restaurent id as 11
    this.apiservice.viewRestaurent(this.restId)
    .subscribe((result)=>{
      this.restDeatils=result
      console.log(this.restDeatils);
      
    })
  }
// update Restaurent Details
updateRestaurent(form:any){
  console.log(form.value);
  let updateRestDetails = {
    id:form.value.id,
    name:form.value.Rname,
    neighborhood:form.value.neighborhood,
    photograph:form.value.photograph,
    address:form.value.address,
    latlng:{
      lat:form.value.lat,
      lng:form.value.lng
    },
    cuisine_type:form.value.cuisine_type,
    operating_hours:{
      Monday:form.value.Monday,
      Tuesday:form.value.Tuesday,
      Wednesday:form.value.Wednesday,
      Thursday:form.value.Thursday,
      Friday:form.value.Friday,
      Saturday:form.value.Saturday,
      Sunday:form.value.Sunday
      
      
    },
    reviews:[
      {
        name:form.value.Cname,
        date:form.value.date,
        rating:form.value.rating,
        comments:form.value.comments
      }
    ]
  }
 
  
  this.apiservice.updateRestaurent(this.restId,updateRestDetails)
  .subscribe((data)=>{
    alert('Restaurent Details Sucessfully Updated...')
    this.router.navigateByUrl('')
  })
 
  
}
}
