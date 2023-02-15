import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestuarentsListComponent } from './restuarents-list/restuarents-list.component';
import { ViewRestuarentComponent } from './view-restuarent/view-restuarent.component';
import { AddRestuarentComponent } from './add-restuarent/add-restuarent.component';
import { UpdateRestuarentComponent } from './update-restuarent/update-restuarent.component';
import { DeleteRestuarentComponent } from './delete-restuarent/delete-restuarent.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import{HttpClientModule} from'@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RestuarentsListComponent,
    ViewRestuarentComponent,
    AddRestuarentComponent,
    UpdateRestuarentComponent,
    DeleteRestuarentComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
