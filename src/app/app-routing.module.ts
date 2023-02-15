import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestuarentComponent } from './add-restuarent/add-restuarent.component';
import { DeleteRestuarentComponent } from './delete-restuarent/delete-restuarent.component';
import { RestuarentsListComponent } from './restuarents-list/restuarents-list.component';
import { UpdateRestuarentComponent } from './update-restuarent/update-restuarent.component';
import { ViewRestuarentComponent } from './view-restuarent/view-restuarent.component';
//defing path for component
const routes: Routes = [
  //RestuarentsListsComponents
  {
    path:'',component:RestuarentsListComponent
  },
  //ViewRestuarentComponent
  {
    path:'View-Restuarent/:id',component:ViewRestuarentComponent
  },
  //AddRestuarentComponent
  {
    path:'Add-Restaurent',component:AddRestuarentComponent
  },
  //updateRestuarentComponent
  {
    path:'update-Restaurent/:id',component:UpdateRestuarentComponent
  },
  //deleteRestuarentComponent
  {
    path:'delete-Restaurent/:id',component:DeleteRestuarentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
