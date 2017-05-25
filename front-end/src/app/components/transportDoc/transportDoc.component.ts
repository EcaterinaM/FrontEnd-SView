import { Component, OnInit } from '@angular/core';
import { TransportDocService } from '../../services/transportDoc.service';
import { Student } from '../../model/Student.model';

@Component({
  selector: 'transport-doc',
  templateUrl: './transportDoc.component.html',
  styleUrls: ['./transportDoc.component.scss']
})
export class TransportDocComponent implements OnInit {

  public listTransportStudents = Array<Student>();
  public rowNumberTable: number;

  /**Pentru pdf din popup **/
  /** Folosesc functia facuta in serviciu si imi aduce un pdf in view**/

  constructor(private _httpService: TransportDocService) {
  }

  /** Functia pe care o apelez in momentul cand dau click pe butonul din popup **/
  getDoc(index: number) {
    this.rowNumberTable = index;
    console.log("Rownum" + index);

    let student = new Student(this.listTransportStudents[this.rowNumberTable]);
    console.log("Id Student" + student.id);

    this._httpService.downloadPDF(student.id).subscribe(
      (res) => {
        //var fileURL = URL.createObjectURL(res);
        var fileURL = URL.createObjectURL(res);
        window.open(fileURL);
      }
    );
  }


  /**
   * When page is loaded we return a list of student that have a transport Req
   */
  ngOnInit() {

    this._httpService.getlistOfStudentsTransport()
      .subscribe(
        (data) => this.getStudentList(data),
        (err) => this.showError()
      );

  }

  getStudentList(responseData: any) {
    for (let index in responseData) {
      let student = new Student(responseData[index]);
      this.listTransportStudents.push(student);
    }

    console.log(this.listTransportStudents[0].firstName);
  }

  showError(): void {
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
