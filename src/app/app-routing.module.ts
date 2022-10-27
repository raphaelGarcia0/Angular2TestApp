import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllevaformComponent } from './component/allevaform/allevaform.component';
import { AllevasongComponent } from './component/allevasong/allevasong.component';
// import { AllevaformComponent } from './component/allevaform/allevaform.component';

import { UpdatesongComponent } from './component/updatesong/updatesong.component';

const routes: Routes = [

  {
		path: "",
		component: AllevasongComponent,
		pathMatch: "full"
	},
  {
		path: "create",
		component: AllevaformComponent
	},
  {
		path: "update/:id",
		component: UpdatesongComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
