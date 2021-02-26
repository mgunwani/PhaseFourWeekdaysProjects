import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  message: string = "Customer Management System";

  customerList: any = [
    { id: 101, name: 'King Kochhar', gender: 'Male', amount: 12000 },
    { id: 102, name: 'Sarah Bowling', gender: 'Male', amount: 22000 },
    { id: 103, name: 'James Smith', gender: 'Male', amount: 32000 },
    { id: 104, name: 'James Bond', gender: 'Male', amount: 40000 },
    { id: 105, name: 'Joseph James', gender: 'Male', amount: 23000 }
  ];

}
