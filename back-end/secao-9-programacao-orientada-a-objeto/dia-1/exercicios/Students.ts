class Student {
  private _registration: string;
  private _name: string;
  private _testsResults: number[] = Array();
  private _workNotes: number[] = Array();

  constructor(registration: string, name: string, testsResults: number[], workNotes: number[]) {
    this._registration = registration;
    this._name = name;
    this.testsResults = testsResults; // nao tem o underline pq tem que ficar igual ao do get da linha 30
    this.workNotes = workNotes;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(newValue: string) {
    this._registration = newValue;
  }

  get name(): string {
    return this._name;
  }

  set name(newValue: string) {
    this._name = newValue;
  }

  get testsResults(): number[] {
    return this._testsResults;
  }

  set testsResults(newValue: number[]) {
    if(newValue.length !== 4) {
      throw new Error('Cada estudante tem que ter 4 notas de prova.')
    } else {
      this._testsResults = newValue;
    }
  }

  get workNotes(): number[] {
    return this._workNotes;
  }

  set workNotes(newValue: number[]) {
    if (newValue.length !== 2) {
      throw new Error('Cada estudante tem que ter 2 notas de trabalho.')
    } else {
      this._workNotes = newValue;
    }
  }
}

//Teste

const student1 = new Student('123456', 'Lorena Mendes', [5,6,8,15], [8,10]);
console.log(student1);

const student2 = new Student('185796', 'Rafael Souto', [3,8,20,1], [16,15]);
console.log(student2);


