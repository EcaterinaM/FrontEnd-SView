import {Component, OnInit} from "@angular/core";
import {SituatieDocService} from "../../services/situatieDoc.service";

@Component({
  selector: 'situatie-doc',
  templateUrl: './situatieDoc.component.html',
  styleUrls: ['./situatieDoc.component.scss']
})

export class SituatieDocComponent implements OnInit {


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

  /**Pentru pdf din popup **/


  constructor(private _httpService: SituatieDocService) {

  }

  /** Functia pe care o apelez in momentul cand dau click pe butonul din popup **/
  getDoc() {
    this._httpService.downloadPDF().subscribe(
      (res) => {
        const fileURL = URL.createObjectURL(res);
        window.open(fileURL);
      }
    );
  }

  ngOnInit() {

  }


  /**
   * Pentru popup
   * @type {boolean}
   */
  display1: boolean = false;
  display2: boolean = false;


  showDialog2() {
    console.log('e aici');
    this.display2 = true;
  }


}
