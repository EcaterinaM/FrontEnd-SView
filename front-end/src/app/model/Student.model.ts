/**
 * Student model
 */

export class Student {
  public id: number;
  public matricolNumber: string;
  public firstName: string;
  public lastName: string;
  public cnp: number;
  public identityCardId: string;
  public fatherInitial: string;
  public adress: String;
  public webmail: String;
  public birthDate: String;
  public password: String;


  constructor(object: any) {
    this.id = object.id;
    this.matricolNumber = object.matricolNumber;
    this.firstName = object.firstName;
    this.lastName = object.lastName;
    this.cnp = object.cnp;
    this.identityCardId = object.identityCardId;
    this.fatherInitial = object.fatherInitial;
    this.adress = object.adress;
    this.webmail = object.webmail;
    this.birthDate = object.birthDate;
    this.password = object.password;
  }
}
