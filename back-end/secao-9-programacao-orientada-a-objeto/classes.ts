class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    console.log(`Creating tv ${b}`);
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn () {
    console.log(`${this.brand}, ${this.size}, resolution: ${this.resolution} \n\
    available connections: ${this.connections}`);    
  }
}

const tv1 = new Tv('LG', 50, '4K', ['Bluetooth, Wi-Fi']);

tv1.turnOn(); 