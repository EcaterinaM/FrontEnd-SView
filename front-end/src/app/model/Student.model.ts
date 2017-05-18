/**
 * Student model
 */

export class Student {
  public id: number;
  public matricol_number: string;
  public first_name: string;
  public last_name: string;
  public cnp: number;
  public identity_card_id: string;
  public father_initial: string;
  public adress: String;
  public webmail: String;
  public birth_date: String;
  public password: String;


  constructor(object: any) {
    this.id = object.id;
    this.matricol_number = object.matricol_number;
    this.first_name = object.first_name;
    this.last_name = object.last_name;
    this.cnp = object.cnp;
    this.identity_card_id = object.identity_card_id;
    this.father_initial = object.father_initial;
    this.adress = object.adress;
    this.webmail = object.webmail;
    this.birth_date = object.birth_date;
    this.password = object.password;
  }
}
