import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `
    <div>
        <h2>Company Name: ${this.companyName}</h2>
        Catchphrase: ${this.catchPhrase}
    </div>
        `;
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  // huom objektit tssässä defaulttina undefined
  // pitää määrittää ylläolevalla tavalla constructorissa
}
