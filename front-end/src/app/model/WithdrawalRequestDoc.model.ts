export class WithdrawalRequestDoc extends Document {
  public id: number;
  public documentName: string;
  public studentName: string;
  public series: string;
  public numberIdCard: number;
  public studyYear: number;
  public universityYear: number;
  public typeOfCourses: string;
  public approveReason: string;
  public date: string;
  public signature: string;
  public seriesBac: string;
  public numberBac: number;
  public numberSheet: number;

  constructor(object: any) {
    super();
    this.id = object.id;
    this.documentName = object.documentName;
    this.studentName = object.studentName;
    this.series = object.series;
    this.numberIdCard = object.numberIdCard;
    this.studyYear = object.studyYear;
    this.universityYear = object.universityYear;
    this.typeOfCourses = object.typeOfCourses;
    this.approveReason = object.approveReason;
    this.date = object.date;
    this.signature = object.signature;
    this.seriesBac = object.seriesBac;
    this.numberBac = object.numberBac;
    this.numberSheet = object.numberSheet;
  }
}