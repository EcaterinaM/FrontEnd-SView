import {Injectable} from "@angular/core";
import {Http, ResponseContentType} from "@angular/http";

@Injectable()

/** Serviciul ce ne va ajuta si in momentul cand o sa legam cu backendul
 *  Avem la dispoztie un URL de unde preluam PDF pe care il dorim
 * **/

export class LicentaDocService {

  private backendUrl: string;

  constructor(private _http: Http) {
    /** url momentan unul random..dar aici o sa punem pathul catre controllerul din
     * backend care se va ocupa de preluarea unui anumit tip de fisier pdf
     *
     */
    this.backendUrl = "https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf"
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

}
