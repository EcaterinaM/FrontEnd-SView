import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType } from '@angular/http';

@Injectable()

/** Serviciul ce ne va ajuta si in momentul cand o sa legam cu backendul
 *  Avem la dispoztie un URL de unde preluam PDF pe care il dorim
 * **/
export class TransportDocService {

  public backendUrl: string;
  public backendPdfUrl: string;
  public notificationUrl: string;

  constructor(private _http: Http) {
    this.backendUrl = "http://localhost:9666/app/transport";
    this.notificationUrl = "http://localhost:8777/notification";
    /** url momentan unul random..dar aici o sa punem pathul catre controllerul din
     * backend care se va ocupa de preluarea unui anumit tip de fisier pdf
     */
    this.backendPdfUrl = "http://localhost:9666/app/transport";
  }

  /** GET-ul efectiv
   * Trebuie sa ne facem controllerul la care sa facem requestul de PDF
   * **/

  downloadPDF(id: number): any {
    let headers = new Headers();
    return this._http.get(this.backendPdfUrl + '/getPdf/' + id.toString() + '/transport.pdf',
      {responseType: ResponseContentType.Blob}).map(
      (res) => {
        return new Blob([res.blob()], {type: 'application/pdf'})
      }
    )
  }

  sendApprovalNotification(email: string) {
    let headers = new Headers();
    return this._http.get(this.notificationUrl + '/send-approve-notification?email=' + email);
  }

  sendDenialNotification(email: string) {
    let headers = new Headers();
    return this._http.get(this.notificationUrl + '/send-denial-notification?email=' + email);
  }

  /**
   * Return the list of Students who have Transport Request
   * @returns {Observable<R>}
   */
  getlistOfStudentsTransport(): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(
      this.backendUrl + '/studentList',
      {headers: headers})
      .map(res => res.json());

  }


}
