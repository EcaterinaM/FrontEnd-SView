import { Injectable } from '@angular/core';
import { Http, ResponseContentType, Headers } from '@angular/http';

@Injectable()

/** Serviciul ce ne va ajuta si in momentul cand o sa legam cu backendul
 *  Avem la dispoztie un URL de unde preluam PDF pe care il dorim
 * **/

export class LicentaDocService {

  private backendUrl: string;
  private backendPdfUrl: string;

  constructor(private _http: Http) {
    this.backendUrl = "http://localhost:9666/app/document";

    this.backendPdfUrl = "https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf"
  }

  /** GET-ul efectiv **/
  downloadPDF(): any {
    return this._http.get(this.backendUrl,
      {responseType: ResponseContentType.Blob}).map(
      (res) => {
        return new Blob([res.blob()], {type: 'application/pdf'})
      }
    )
  }

  getlistOfStudents(id: number): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(
      this.backendUrl + '/studentList/' + id.toString(),
      {headers: headers})
      .map(res => res.json());

  }


}
