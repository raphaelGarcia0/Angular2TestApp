import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { SongComponent } from './components/music/manage/song.component';
import { MusicListComponent } from './components/music/music-list.component';
import { MaterialModule } from './shared/common/material.module';
import { SongService } from './shared/services/songs.service';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    SongComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
