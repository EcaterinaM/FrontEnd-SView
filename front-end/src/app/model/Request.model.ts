export class Request {
  private id: number;
  private studentId: number;
  private documentId: number;

  constructor(object: any) {
    this.id = object.id;
    this.studentId = object.studentId;
    this.documentId = object.documentId;
  }
}
