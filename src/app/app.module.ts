import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainCompComponent } from './main-comp/main-comp.component';
import { FilterCompComponent } from './main-comp/filter-comp/filter-comp.component';
import { RemainCompComponent } from './main-comp/remain-comp/remain-comp.component';
import { ListCompComponent } from './main-comp/list-comp/list-comp.component';
import { AddCompComponent } from './main-comp/add-comp/add-comp.component';
import { CleanCompComponent } from './main-comp/clean-comp/clean-comp.component';
import { ItemCompComponent } from './main-comp/list-comp/item-comp/item-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    MainCompComponent,
    FilterCompComponent,
    RemainCompComponent,
    ListCompComponent,
    AddCompComponent,
    CleanCompComponent,
    ItemCompComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
