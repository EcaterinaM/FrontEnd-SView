import { Component, OnInit } from '@angular/core';
import { IntrerupereDocService } from '../../services/intrerupereDoc.service';
import { Student } from '../../model/Student.model';

@Component({
  selector: 'intrerupere-doc',
  templateUrl: './intrerupereDoc.component.html',
  styleUrls: ['./intrerupereDoc.component.scss']
})

export class IntrerupereDocComponent implements OnInit {

  public listTransportStudents = Array<Student>();
  public rowNumberTable: number;
  public nrDoc: number;

  /**Pentru pdf din popup **/
  /** Folosesc functia facuta in serviciu si imi aduce un pdf in view**/

  constructor(private _httpService: IntrerupereDocService) {
  }

  /** Functia pe care o apelez in momentul cand dau click pe butonul din popup **/
  getDoc(index: number) {
    this.rowNumberTable = index;
    console.log("Rownum" + index);

    let student = new Student(this.listTransportStudents[this.rowNumberTable]);
    console.log("Id Student" + student.id);

    this._httpService.downloadPDF(student.id).subscribe(
      (res) => {
        var fileURL = URL.createObjectURL(res);
        window.open(fileURL);
      }
    );
  }

  ngOnInit() {
    this.nrDoc = 2;
    this._httpService.getlistOfStudents(this.nrDoc)
      .subscribe(
        (data) => this.getStudentList(data),
        (err) => this.showError()
      );

  }

  private getStudentList(responseData: any): void {
    for (let index in responseData) {
      let student = new Student(responseData[index]);
      this.listTransportStudents.push(student);
      console.log(student.firstName);
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

  showDialog1() {
    console.log('e aici');
    this.display1 = true;
  }

  showDialog2() {
    console.log('e aici');
    this.display2 = true;
  }

}
