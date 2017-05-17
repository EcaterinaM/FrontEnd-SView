export class ScolarSituationRequestDoc extends Document {
  public id: number;
  public document_name: string;
  public student_name: string;
  public current_year: number;
  public year_of_study: number;
  public has_brought_receipt: string

  constructor(object: any) {
    super();
    this.id = object.id;
    this.document_name = object.document_name;
    this.student_name = object.student_name;
    this.current_year = object.currentYear;
    this.year_of_study = object.year_of_study;
    this.has_brought_receipt = object.has_brought_receipt;
  }
}
