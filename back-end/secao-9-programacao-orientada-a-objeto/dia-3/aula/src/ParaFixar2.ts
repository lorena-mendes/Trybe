interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

//nao entendi essa parte
interface IModel {
  create: (character: Character) => Promise<DbCharacter>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<Boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;
}

class LocalDbModel implements IModel {
  create = async (character: Character) => {
    const lastId = db.length > 0 ? db[db.length -1].id : 0;
    const newCharacter = { id: lastId, ...character };
    db.push(newCharacter);
    return newCharacter;
  }

  findIndexById = (id: number) => {
    const index = db.findIndex((character) => character.id === id );
    if (index < 0) throw new Error('Character not found');
    return index;
  }

  update = async (id: number, character: Character) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character };
    return db[indexToUpdate];
  }

  delete = async (id: number) => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  }

  getAll = async () => db;

  getById = async (id: number) => {
    const indexToGet = this.findIndexById(id);
    return db[indexToGet];
  }
}