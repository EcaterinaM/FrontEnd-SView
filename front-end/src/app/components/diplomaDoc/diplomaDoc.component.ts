import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diploma-doc',
  templateUrl: './diplomaDoc.component.html',
  styleUrls: ['./diplomaDoc.component.scss']
})

export class DiplomaDocComponent implements OnInit {


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


}
