import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, retry } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { BehaviorSubject, Observable, of } from "rxjs";
import { BaseService } from "./common/base.service";
import { DateParserService } from "./common/date-parser.service";
import { SongDatabase, SongModel } from "../models/song.model";

@Injectable({
   providedIn: "root"
})

export class SongService extends BaseService {
   public songDatabase: Observable<SongDatabase>;
   private songDatabaseSubject: BehaviorSubject<SongDatabase>;
   constructor(private http: HttpClient) {
      super();
      if (!localStorage.getItem("songs")) {
         localStorage.setItem("songs", JSON.stringify({
            songs: [
               {
                  id: 1,
                  title: "1904",
                  artist: "The Tallest Man on Earth",
                  year: 2012
               },
               {
                  id: 12,
                  title: "#40",
                  artist: "Dave Matthews",
                  year: 1999
               },
               {
                  id: 13,
                  title: "40oz to Freedom",
                  artist: "Sublime",
                  year: 1996
               },
               {
                  id: 14,
                  title: "#41",
                  artist: "Dave Matthews",
                  year: 1996
               },
               {
                  id: 15,
                  title: "American Girl",
                  artist: "Tom Petty",
                  year: 1977
               },
               {
                  id: 16,
                  title: "American Music",
                  artist: "Violent Femmes",
                  year: 1991
               },
               {
                  id: 17,
                  title: "American Pie",
                  artist: "Don McLean",
                  year: 1972
               },
               {
                  id: 18,
                  title: "And it Stoned Me",
                  artist: "Van Morrison",
                  year: 1970
               },
               {
                  id: 19,
                  title: "A Sailor's Christmas",
                  artist: "Jimmy Buffett",
                  year: 1996
               },
               {
                  id: 10,
                  title: "Badfish",
                  artist: "Sublime",
                  year: 1996
               },
               {
                  id: 111,
                  title: "Banana Pancakes",
                  artist: "Jack Johnson",
                  year: 2005
               },
               {
                  id: 112,
                  title: "Barefoot Children",
                  artist: "Jimmy Buffett",
                  year: 1995
               },
               {
                  id: 113,
                  title: "Big Parade",
                  artist: "The Lumineers",
                  year: 2012
               },
               {
                  id: 114,
                  title: "Brown Eyed Girl",
                  artist: "Van Morrison",
                  year: 1967
               },
               {
                  id: 115,
                  title: "Cape Canaveral",
                  artist: "Conor Oberst",
                  year: 2008
               },
               {
                  id: 116,
                  title: "Carry On",
                  artist: "fun.",
                  year: 2012
               },
               {
                  id: 117,
                  title: "Catch the Wind",
                  artist: "Donovan",
                  year: 1965
               },
               {
                  id: 118,
                  title: "Cat's in the Cradle",
                  artist: "Harry Chapin",
                  year: 1974
               },
               {
                  id: 119,
                  title: "Changes in Latitudes, Changes in Attitudes",
                  artist: "Jimmy Buffett",
                  year: 1977
               },
               {
                  id: 120,
                  title: "Classy Girls",
                  artist: "The Lumineers",
                  year: 2012
               },
               {
                  id: 121,
                  title: "Creep",
                  artist: "Radiohead",
                  year: 1993
               },
               {
                  id: 122,
                  title: "Danny Boy",
                  artist: "Johnny Cash",
                  year: 2002
               },
               {
                  id: 123,
                  title: "Darkness Between the Fireflies",
                  artist: "Mason Jennings",
                  year: 1997
               },
               {
                  id: 124,
                  title: "Dead Sea",
                  artist: "The Lumineers",
                  year: 2012
               },
               {
                  id: 125,
                  title: "Distantly in Love",
                  artist: "Jimmy Buffett",
                  year: 1983
               },
               {
                  id: 126,
                  title: "Don't Leave Me (Ne Me Quitte Pas)",
                  artist: "Regina Spektor",
                  year: 2012
               },
               {
                  id: 127,
                  title: "Don't Look Back in Anger",
                  artist: "Oasis",
                  year: 1996
               },
               {
                  id: 128,
                  title: "Don't Stop Believin'",
                  artist: "Journey",
                  year: 1981
               },
               {
                  id: 129,
                  title: "Doomsday",
                  artist: "Elvis Perkins",
                  year: 2009
               },
               {
                  id: 130,
                  title: "Do You Remember",
                  artist: "Jack Johnson",
                  year: 2005
               },
               {
                  id: 131,
                  title: "Drink the Water",
                  artist: "Jack Johnson",
                  year: 2001
               }
            ]
         }));
         this.songDatabase = this.songDatabaseSubject.asObservable();
      }
   }

   public get currentSongDatabase(): SongDatabase {
      return JSON.parse(localStorage.getItem("songs")) as SongDatabase;
   }

   public get(songId: number): SongModel {
      var songDatabase = JSON.parse(localStorage.getItem("songs")) as SongDatabase;
      for (var i = 0; i < songDatabase.songs.length; i++) {
         if (songDatabase.songs[i].id == songId) {
            return songDatabase.songs[i] as SongModel;
            break;
         }
      }
   };

   public create(song: SongModel) {
      var songDatabase = JSON.parse(localStorage.getItem("songs")) as SongDatabase;
      songDatabase.songs.push(song);
      localStorage.setItem("songs", JSON.stringify(songDatabase));
   };

   public update(song: SongModel) {
      var songDatabase = JSON.parse(localStorage.getItem("songs")) as SongDatabase;
      for (var i = 0; i < songDatabase.songs.length; i++) {
         if (songDatabase.songs[i].id == song.id) {
            songDatabase.songs[i] = song;
            break;
         }
      }
      localStorage.setItem("songs", JSON.stringify(songDatabase));
   };

   public delete(song: SongModel) {
      var songDatabase = JSON.parse(localStorage.getItem("songs")) as SongDatabase;
      let songs = songDatabase.songs.filter(function (item) {
         return (item.id != song.id);
      })
      localStorage.setItem("songs", JSON.stringify({
         songs: songs
      }));
      console.log(this.currentSongDatabase);
   }
}
