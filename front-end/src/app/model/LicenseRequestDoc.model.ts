/**
 *
 * License Document Request model
 */

export class LicenseRequestDoc extends Document {
  public id: number;
  public documentName: string;
  public studentName: string;
  public matricolNumber: string;
  public graduationYear: number;
  public dateReceiptLinguisticCompetence: string;
  public paymentReceiptLinguisticCompetence: number;
  public dateReceiptRedoLicenseExam: string;
  public paymentReceiptRedoLicenseExam: number;
  public licenseTopic: string;
  public coordinatorProf: string;
  public currentDateToday: string;
  public phoneNumber: string;

  constructor(object: any) {
    super();
    this.id = object.id;
    this.documentName = object.documentName;
    this.studentName = object.studentName;
    this.matricolNumber = object.marticolNumber;
    this.graduationYear = object.graduationYear;
    this.dateReceiptLinguisticCompetence = object.dateReceiptLinguisticCompetence;
    this.paymentReceiptLinguisticCompetence = object.paymentReceiptLinguisticCompetence;
    this.dateReceiptRedoLicenseExam = object.dateReceiptRedoLicenseExam;
    this.paymentReceiptRedoLicenseExam = object.paymentReceiptRedoLicenseExam;
    this.licenseTopic = object.licenseTopic;
    this.coordinatorProf = object.coordinatorProf;
    this.currentDateToday = object.currentDateToday;
    this.phoneNumber = object.phoneNumber;
  }


}
