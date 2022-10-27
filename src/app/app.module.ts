import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllevasongComponent } from './component/allevasong/allevasong.component';
import { AllevaformComponent } from './component/allevaform/allevaform.component';
import { UpdatesongComponent } from './component/updatesong/updatesong.component';


@NgModule({
  declarations: [
    AppComponent,
    AllevasongComponent,
    AllevaformComponent,
    UpdatesongComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
