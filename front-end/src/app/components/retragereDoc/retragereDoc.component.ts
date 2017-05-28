import { Component, OnInit } from '@angular/core';
import { RetragereDocService } from '../../services/retragereDoc.service';
import { Student } from '../../model/Student.model';

@Component({
  selector: 'retragere-doc',
  templateUrl: './retragereDoc.component.html',
  styleUrls: ['./retragereDoc.component.scss']
})

export class RetragereDocComponent implements OnInit {

  public listTransportStudents = Array<Student>();

  page: number = 1;

  /**
   * Inject dependency of this type of document Service
   * @param _httpService
   */
  constructor(private _httpService: RetragereDocService) {
  }

  /**
   * Function to get the Pdf document
   */
  getDoc() {
    this._httpService.downloadPDF().subscribe(
      (res) => {
        var fileURL = URL.createObjectURL(res);
        window.open(fileURL);
      }
    );
  }

  /**
   * On page load get the list of students that have this type of document request
   */
  ngOnInit() {
    this._httpService.getlistOfStudents(2)
      .subscribe(
        (data) => this.getStudentList(data),
        (err) => this.showError()
      );
  }

  /**
   * The function that populates the Array of Students
   * @param responseData
   */
  private getStudentList(responseData: any): void {
    for (let index in responseData) {
      let student = new Student(responseData[index]);
      this.listTransportStudents.push(student);
    }

    console.log(this.listTransportStudents[0].firstName);
  }

  /**
   * Print error in the console if we cannnot fetch data from server
   */
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
