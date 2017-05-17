/**
 * Transport Request Document
 */
export class TransportRequestDoc extends Document {

  public id: number;
  public document_name: string;
  public student_name: string;
  public nr_series_id: string;
  public year_of_study: number;

  constructor(object: any) {
    super();
    this.id = object.id;
    this.document_name = object.document_name;
    this.student_name = object.student_name;
    this.nr_series_id = object.nr_series_id;
    this.year_of_study = object.year_of_study;
  }
}