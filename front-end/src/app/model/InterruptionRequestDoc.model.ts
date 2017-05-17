/**
 * Cererea intrerupere studii
 */
export class InterruptionRequestDoc extends Document {

  public id: number;
  public document_name: string;
  public student_name: string;
  public current_year: number;
  public year_of_study: number;
  public starting_semester: number;
  public from_university_year: number;
  public number_of_semesters: number;

  constructor(object: any) {
    super();
    this.id = object.id;
    this.document_name = object.document_name;
    this.student_name = object.student_name;
    this.current_year = object.current_year;
    this.year_of_study = object.year_of_study;
    this.starting_semester = object.starting_semester;
    this.from_university_year = object.from_university_year;
    this.number_of_semesters = object.number_of_semesters;

  }

}