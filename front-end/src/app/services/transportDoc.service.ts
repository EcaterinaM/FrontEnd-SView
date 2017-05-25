import { Injectable } from '@angular/core';
import { Http, ResponseContentType, Headers } from '@angular/http';

@Injectable()

/** Serviciul ce ne va ajuta si in momentul cand o sa legam cu backendul
 *  Avem la dispoztie un URL de unde preluam PDF pe care il dorim
 * **/

export class TransportDocService {

  public backendUrl: string;
  public backendPdfUrl: string;

  constructor(private _http: Http) {
    this.backendUrl = "http://localhost:9666/app/transport";

    /** url momentan unul random..dar aici o sa punem pathul catre controllerul din
     * backend care se va ocupa de preluarea unui anumit tip de fisier pdf
     *
     */
    //this.backendPdfUrl = "https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf"
    this.backendPdfUrl = "http://localhost:9666/app/ "
  }

  /** GET-ul efectiv
   * Trebuie sa ne facem controllerul la care sa facem requestul de PDF
   * **/
  downloadPDF(id: number): any {
    return this._http.get(this.backendPdfUrl + id.toString(),
      {responseType: ResponseContentType.Blob}).map(
      (res) => {
        return new Blob([res.blob()], {type: 'application/pdf'})
      }
    )
  }

  getlistOfStudentsTransport(): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(
      this.backendUrl + '/studentList',
      {headers: headers})
      .map(res => res.json());

  }



}