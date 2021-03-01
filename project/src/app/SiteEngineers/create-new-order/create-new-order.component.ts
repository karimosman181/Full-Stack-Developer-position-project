import { Component, OnInit } from '@angular/core';
import { WorkOrders } from 'src/app/data';
import {WorkOrder} from 'src/app/WorkOrder';
import{WorkOrderService} from 'src/app/work-order.service'

import { Location } from '@angular/common';

@Component({
  selector: 'app-create-new-order',
  templateUrl: './create-new-order.component.html',
  styleUrls: ['./create-new-order.component.css']
})
export class CreateNewOrderComponent implements OnInit {

  Order?: WorkOrder;

  model:any;

  

  submitted = false;

  constructor(private WorkOrderService:WorkOrderService, private location: Location) { 
    this.model={
    Id: 0, 
    creationDate: "",
    OperationDescription: " ",
    StartDate: "",
    EndDate: "",
    progress: 0,
    };
  }

  ngOnInit(): void {
  }

  newHero() {
    this.model={
      Id: 0, 
      creationDate: " ",
      OperationDescription: " ",
      StartDate: " ",
      EndDate: " ",
      progress: 0
      };
  }

  onSubmit() { this.submitted = true; }

  save(){
    this.Order ={
      Id: this.model.Id, 
      creationDate: this.model.creationDate,
      OperationDescription: this.model.OperationDescription,
      StartDate: this.model.StartDate,
      EndDate: this.model.EndDate,
      progress: this.model.progress,
      Details:[]
    };

    this.WorkOrderService.addOrder(this.Order);

    this.location.back();
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }
  

}
