import { Component, OnInit } from '@angular/core';
import { SituatieDocService } from '../../services/situatieDoc.service';
import { Student } from '../../model/Student.model';

@Component({
  selector: 'situatie-doc',
  templateUrl: './situatieDoc.component.html',
  styleUrls: ['./situatieDoc.component.scss']
})

export class SituatieDocComponent implements OnInit {


  public listTransportStudents = Array<Student>();




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
    this._httpService.getlistOfStudents(5)
      .subscribe(
        (data) => this.getStudentList(data),
        (err) => this.showError()
      );


  }

  private getStudentList(responseData: any): void {
    for (let index in responseData) {
      let student = new Student(responseData[index]);
      this.listTransportStudents.push(student);
    }

    console.log(this.listTransportStudents[0].firstName);
  }

  private showError(): void {
    console.log("Can't fetch data from the server");
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
