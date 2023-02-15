import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restaurentsList:any[],filterString:String,propName:any): any[] {
    const result:any=[]
    if (!restaurentsList|| filterString==''|| propName==''){
      return restaurentsList
    }
    restaurentsList.forEach((restaurant:any)=>{
      // console.log(restaurant[propName]);
      
      if(restaurant[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
      result.push(restaurant) 
      console.log(result);
      
      }

    })
    return result
  }

}
