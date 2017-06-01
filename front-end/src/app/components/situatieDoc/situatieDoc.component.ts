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
  public rowNumberTable: number;



  constructor(private _httpService: SituatieDocService) {

  }

  /** Functia pe care o apelez in momentul cand dau click pe butonul din popup **/
  getDoc(index: number) {
    this.rowNumberTable = index;
    console.log("Rownum" + index);

    let student = new Student(this.listTransportStudents[this.rowNumberTable]);
    console.log("Id Student" + student.id);
    this._httpService.downloadPDF(student.id).subscribe(
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
    this.listTransportStudents = [];
    for (let index in responseData) {
      let student = new Student(responseData[index]);
      this.listTransportStudents.push(student);
    }


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
