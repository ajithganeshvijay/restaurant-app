import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-restuarent',
  templateUrl: './delete-restuarent.component.html',
  styleUrls: ['./delete-restuarent.component.css']
})
export class DeleteRestuarentComponent implements OnInit {
  restId:any
  
  constructor(private activateroute:ActivatedRoute,private apiservice:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.activateroute.params.subscribe((result)=>{
      console.log(result['id']);
      this.restId=result['id']
      
   })
   this.apiservice.deleteRestaurent(this.restId)
   .subscribe(()=>{
    alert("Restaurent successfully deleted...")
    this.router.navigateByUrl('')
    
  })
  }


}
