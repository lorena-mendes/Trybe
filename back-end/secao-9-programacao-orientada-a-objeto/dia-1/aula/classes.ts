class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    console.log(`Creating tv ${b}`);
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn () {
    console.log(`${this._brand}, ${this._size}, resolution: ${this._resolution} \n\
    available connections: ${this._connections}`);    
  }

  get connectedToGetter() {
    return this._connectedTo;
  }
  
  set connectedToSetter(newValue: string) {
    if (!newValue || this._connections.includes(newValue)) {
      this._connectedTo = newValue;
      console.log(this._connectedTo);      
    } else {
      console.log('Sorry, connection unavailable!');
      
    }
  }
}

const tv1 = new Tv('LG', 50, '4K', ['Bluetooth, Wi-Fi']);

tv1.turnOn(); 

tv1.connectedToSetter = 'Wi-Fi';
console.log('Connected to: ', tv1.connectedToSetter);