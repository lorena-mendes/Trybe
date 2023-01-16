class Data { 
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(d: number, m: number, y: number){
    const date = `${y}-${m}-${d}`;
    
    if(new Date(date).getDate() !== d) {
      this._day= 2;
      this._month = 9;
      this._year= 1991;
    } else {
      this._day= d;
      this._month = m;
      this._year= y;
    }
  }

  public get day(): number {
    return this._day;
  }
  public set day(value: number) {
    this._day = value;
  }

  public get month(): number {
    return this._month;
  }
  public set month(value: number) {
    this._month = value;
  }

  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    this._year = value;
  }
}

const newDate = new Data(19,4,1992);

console.log(newDate);


