import { Component, OnInit } from '@angular/core';
import {Detail} from 'src/app/Detail';
import {WorkOrderService} from 'src/app/work-order.service';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-create-new-detail',
  templateUrl: './create-new-detail.component.html',
  styleUrls: ['./create-new-detail.component.css']
})
export class CreateNewDetailComponent implements OnInit {
   
  Detail?:Detail;

  location = ["Beirut", "saida", "Baabda"];

  

  model:any;

  submitted = false;

  constructor(private WorkOrderService:WorkOrderService, private Location:Location,private route: ActivatedRoute) {
    this.model={
      Description: "",
      location: "",
      progress: 0
    };
   }

  ngOnInit(): void {
  }

  newDetail(){
    this.model={
      Description: "",
      location: "",
      progress: 0
    };
  }

  onSubmit() { this.submitted = true; }


  save(){
    this. Detail={
      Description: this.model.Description,
      location: this.model.location,
      progress: this.model.progress
    };
    var nb;
    if((nb = this.route.snapshot.paramMap.get('id')) != null){
      const id = +nb;
      this.WorkOrderService.addDetail(id,this.Detail);
      this.Location.back();
     }
   

  }
}
