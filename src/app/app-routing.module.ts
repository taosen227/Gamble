import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LevelComponent } from './level/level.component';
import { PerCardComponent } from './per-card/per-card.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'Level',
    component:LevelComponent
  },
  {
    path:'PerCard',
    component:PerCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
