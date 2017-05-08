import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

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


  /**Pentru pdf din popup **/
  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  page: number = 1;
  pageurl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
  }

  /**pdf final**/


  /**
   * Pentru popup
   * @type {boolean}
   */
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
