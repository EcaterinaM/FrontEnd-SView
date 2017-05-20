/**
 * Transport Request Document model
 */
export class TransportRequestDoc extends Document {

  public id: number;
  public documentName: string;
  public studentName: string;
  public nrSeriesId: string;
  public yearOfStudy: number;

  constructor(object: any) {
    super();
    this.id = object.id;
    this.documentName = object.documentName;
    this.studentName = object.studentName;
    this.nrSeriesId = object.nrSeriesId;
    this.yearOfStudy = object.yearOfStudy;
  }
}