import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/common/base.component';
import { SongModel } from 'src/app/shared/models/song.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SongService } from 'src/app/shared/services/songs.service';
import { AlertifyService } from 'src/app/shared/services/common/alertify.service';
import { BroadcastService } from 'src/app/shared/services/common/broadcast.service';
import { RouteService } from 'src/app/shared/services/common/route.service';

@Component({
  selector: 'music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})

export class MusicListComponent extends BaseComponent implements OnInit {
  public title = 'Songs App';
  public totalCount = 0;
  public isMobile = false;
  public isTablet = false;
  public isDesktopDevice = false;
  public displayedColumns = ["id", "title", "artist", "year", "actions"];
  public songs: SongModel[] = [];
  public loading = false;

  constructor(
    private router: Router,
    private songService: SongService,
    private alertService: AlertifyService,
    public override broadCastService: BroadcastService,
    public override routeService: RouteService) {
    super(broadCastService, routeService);
    this.totalCount = this.songService.currentSongDatabase.songs.length;
    this.songs = this.songService.currentSongDatabase.songs;
  }

  public ngOnInit() {
  }

  public getAllSongs() {
    this.loading = true;
    this.totalCount = this.songService.currentSongDatabase.songs.length;
    this.songs = this.songService.currentSongDatabase.songs;
    this.loading = false;
  }

  public confirmDelete(song: SongModel) {
    this.loading = true;
    this.songService.delete(song);
    this.alertService.success("Song deleted successfully!");
    this.getAllSongs();
    //location.reload();
    this.loading = false;
  }
}