import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongComponent } from './components/music/manage/song.component';
import { MusicListComponent } from './components/music/music-list.component';

const routes: Routes = [
	{
		path: "",
		component: MusicListComponent,
		pathMatch: "full"
	},
	{
		path: "create",
		component: SongComponent
	},
	{
		path: ":recordid",
		component: SongComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
