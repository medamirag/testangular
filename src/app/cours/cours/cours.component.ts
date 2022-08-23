import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {
  idc:number=-1
@Input() cours:Cours={id:0,briefdesc:"aaaa",cours:"cours1",description:"ddddddd"}
  constructor(private route:ActivatedRoute,private coursService:CoursService) { 
   if(this.route.snapshot.params["id"]>-1){
    this.idc=this.route.snapshot.params["id"]

   }
  }

  ngOnInit(): void {
   if(this.route.snapshot.params["id"]>-1){
    this.cours=this.coursService.getCoursByID(this.route.snapshot.params["id"])
  }

  }

}
