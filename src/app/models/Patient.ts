export interface IPatient {
  ID: number;
  FirstName: String;
  LastName: String;
}

export class Patient {
  constructor(private iPatient: IPatient) {
  }

  getFullName() {
    return this.iPatient.FirstName + ' ' + this.iPatient.LastName;
  }
}
