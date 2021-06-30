import faker from 'faker';
import { Mappable } from './CustomMap';
// moduulien yhteydessä tarvitsee installaa type declaration file
// npm i @types/faker

// implements - auttaa error handlingissa
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `User Name: ${this.name}`;
  }

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
