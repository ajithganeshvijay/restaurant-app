import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //variables
search = new BehaviorSubject("")

  //depentency Injection
  constructor(private api:HttpClient) { }

  //undefined functions
  
  //1. get all restaurent functions
  getAllRestaurentsLists(){
    //call api:{environment.apiURL}}/restaurants
    //Htpp requests- get method-HttpClient-HttpClient-HTTPClientModule
  return this.api.get(`${environment.apiURL}/restaurants`)
  }
  //to get a single restaurent details
viewRestaurent(restId:Number){
  // using rest id call api:'{environment.apiURL}}/restaurants/'+restId
  //http request - get method
return this.api.get(`${environment.apiURL}/restaurants/${restId}`)
}
//to add new restaurent details
addRestaurent(newRestaurent:any){
return  this.api.post(`${environment.apiURL}/restaurants/`,newRestaurent)
}
//to update restaurent details
updateRestaurent(restId:any,updatedRestBody:any){
 return this.api.put(`${environment.apiURL}/restaurants/${restId}`,updatedRestBody)
}
//to delete restaurent details
deleteRestaurent(restId:any){
return this.api.delete(`${environment.apiURL}/restaurants/${restId}`)
}
//to serach arestaurent
// searchRestaurent(event:any){
// return this.api.get('{environment.apiURL}}/restaurants/'+event)
// }
}
 

// ............................NOTE..........................

//dependency Injection:It is the process of  sharing data in between two depentend classes.it is used inside the constructor