import { Component, OnInit } from '@angular/core';
import { Cours } from '../../cours';
import { CoursService } from '../../cours.service';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.scss']
})
export class CoursListComponent implements OnInit {
courslist:Cours[]
  constructor(private coursService:CoursService) {
    this.courslist=this.coursService.getAllCours()
   }

  ngOnInit(): void {
    this.courslist=this.coursService.getAllCours()

    
  }

}
