export class Secretary {
  public id: number;
  public first_name: string;
  public last_name: string;
  public webmail: String;
  public password: String;


  constructor(object: any) {
    this.id = object.id;
    this.first_name = object.first_name;
    this.last_name = object.last_name;
    this.webmail = object.webmail;
    this.password = object.password;
  }

}
