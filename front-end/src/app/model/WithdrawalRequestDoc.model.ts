export class WithdrawalRequestDoc extends Document {
  public id: number;
  public document_name: string;
  public student_name: string;
  public series: string;
  public number_id_card: number;
  public study_year: number;
  public university_year: number;
  public type_of_courses: string;
  public approve_reason: string;
  public date: string;
  public signature: string;
  public series_bac: string;
  public number_bac: number;
  public number_sheet: number;

  constructor(object: any) {
    super();
    this.id = object.id;
    this.document_name = object.document_name;
    this.student_name = object.student_name;
    this.series = object.series;
    this.number_id_card = object.number_id_card;
    this.study_year = object.study_year;
    this.university_year = object.university_year;
    this.type_of_courses = object.type_of_courses;
    this.approve_reason = object.approve_reason;
    this.date = object.date;
    this.signature = object.signature;
    this.series_bac = object.series_bac;
    this.number_bac = object.number_bac;
    this.number_sheet = object.number_sheet;
  }
}