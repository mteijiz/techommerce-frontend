import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-table',
  templateUrl: './brand-table.component.html',
  styleUrls: ['./brand-table.component.css']
})
export class BrandTableComponent implements OnInit {

  denominations = [
    { name: "twenty", plural: "twenties", value: 20.00 },
    { name: "ten", plural: "tens", value: 10.00 },
    { name: "five", plural: "fives", value: 5.00 },
    { name: "one", plural: "ones", value: 1.00 },
    { name: "quarter", plural: "quarters", value: 0.25 },
    { name: "dime", plural: "dimes", value: 0.10 },
    { name: "nickle", plural: "nickles", value: 0.05 },
    { name: "penny", plural: "pennies", value: 0.01 }
  ];
  constructor() {
    console.log(this.denominations);
  }
  ngOnInit() {
   
  }

}
