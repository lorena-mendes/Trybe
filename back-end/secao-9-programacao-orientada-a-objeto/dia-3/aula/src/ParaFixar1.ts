abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(this._name);  
  }

  specialMove(): void {
    console.log(this._specialMoveName);    
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(this._name);
  }

  specialMove(): void {
    console.log(this.specialMoveName);
    
  }
}

function callCharacters(character: Character) {
  character.talk();
  character.specialMove();
}

const yoshi = new MeleeCharacter('yoshi', 'Super dragon');
const samus = new LongRangeCharacter('samus', 'Zero Laser');

callCharacters(yoshi);
callCharacters(samus);