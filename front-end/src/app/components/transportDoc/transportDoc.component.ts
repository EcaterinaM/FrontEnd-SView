import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transport-doc',
  templateUrl: './transportDoc.component.html',
  styleUrls: ['./transportDoc.component.scss']
})
export class TransportDocComponent implements OnInit {


  /**vectorul cu numele hardcodate **/
  names = [
    {value: '1', viewValue: 'Bianca'},
    {value: '2', viewValue: 'Ana'},
    {value: '3', viewValue: 'Andreea'},
    {value: '4', viewValue: 'Ecaterina'},
    {value: '5', viewValue: 'Simina'},
    {value: '6', viewValue: 'Diana'},
    {value: '7', viewValue: 'Elena'},
    {value: '8', viewValue: 'Ionut'},
    {value: '9', viewValue: 'Octavian'},
    {value: '10', viewValue: 'Petruta'},
    {value: '11', viewValue: 'Vlad'},

  ];

  constructor() {
  }

  ngOnInit() {
  }

  display1: boolean = false;
  display2: boolean = false;

  showDialog1() {
    console.log('e aici');
    this.display1 = true;
  }

  showDialog2() {
    console.log('e aici');
    this.display2 = true;
  }

}
