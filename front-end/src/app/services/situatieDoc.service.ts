/**
 * Created by SiminaAdela on 13.05.2017.
 */
import { Injectable } from '@angular/core';
import { Http, ResponseContentType, Headers } from '@angular/http';

@Injectable()

/** Serviciul ce ne va ajuta si in momentul cand o sa legam cu backendul
 *  Avem la dispoztie un URL de unde preluam PDF pe care il dorim
 * **/

export class SituatieDocService {

  private backendUrl: string;
  private backendUrlList: string;
  constructor(private _http: Http) {
    this.backendUrl = "http://localhost:9666/app/scolarSituation";
    this.backendUrlList = "http://localhost:9666/app/document";
  }

  /** GET-ul efectiv **/
  downloadPDF(id: number): any {
    return this._http.get(this.backendUrl + '/getPdf/' + id.toString() + '/scolarSituation.pdf',
      {responseType: ResponseContentType.Blob}).map(
      (res) => {
        return new Blob([res.blob()], {type: 'application/pdf'})
      }
    )
  }

  /**
   * Return the list of Students who have Transport Request
   * @returns {Observable<R>}
   */
  getlistOfStudents(id: number): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(
      this.backendUrlList + '/studentList/' + id.toString(),
      {headers: headers})
      .map(res => res.json());

  }


}
