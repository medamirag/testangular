import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursListComponent } from './cours/cours-list/cours-list.component';
import { CoursComponent } from './cours/cours.component';

const routes: Routes = [
  {path:'',component:CoursListComponent},
  {path:':id',component:CoursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
