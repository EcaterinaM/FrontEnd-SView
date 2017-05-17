export class LicenseRequestDoc extends Document {
  public id: number;
  public document_name: string;
  public student_name: string;
  public marticol_number: string;
  public graduation_year: number;
  public date_receipt_linguistic_competence: string;
  public payment_receipt_linguistic_competence: number;
  public date_receipt_redo_license_exam: string;
  public payment_receipt_redo_license_exam: number;
  public license_topic: string;
  public coordinator_prof: string;
  public current_date_today: string;
  public phone_number: string;

  constructor(object: any) {
    super();
    this.id = object.id;
    this.document_name = object.document_name;
    this.student_name = object.student_name;
    this.marticol_number = object.marticol_number;
    this.graduation_year = object.graduation_year;
    this.date_receipt_linguistic_competence = object.date_receipt_linguistic_competence;
    this.payment_receipt_linguistic_competence = object.payment_receipt_linguistic_competence;
    this.date_receipt_redo_license_exam = object.date_receipt_redo_license_exam;
    this.payment_receipt_redo_license_exam = object.payment_receipt_redo_license_exam;
    this.license_topic = object.license_topic;
    this.coordinator_prof = object.coordinator_prof;
    this.current_date_today = object.current_date_today;
    this.phone_number = object.phone_number;
  }


}
