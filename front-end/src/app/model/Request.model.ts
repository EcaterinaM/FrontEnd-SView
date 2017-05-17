export class Request {
  private id: number;
  private student_id: number;
  private document_id: number;

  constructor(object: any) {
    this.id = object.id;
    this.student_id = object.student_id;
    this.document_id = object.document_id;
  }
}
