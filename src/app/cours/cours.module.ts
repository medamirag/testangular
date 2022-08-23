import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from './cours/cours.component';
import { CoursListComponent } from './cours/cours-list/cours-list.component';


@NgModule({
  declarations: [CoursComponent,CoursListComponent],
  imports: [
    CommonModule,
    CoursRoutingModule,
    
  ]
})
export class CoursModule { }
