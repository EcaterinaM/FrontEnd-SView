/**
 * Student model
 */

export class Student {
  private id: number;
  private matricol_number: string;
  private first_name: string;
  private last_name: string;
  private cnp: number;
  private identity_card_id: string;
  private father_initial: string;
  private adress: String;
  private webmail: String;
  private birth_date: String;
  private password: String;


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
