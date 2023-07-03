import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `
    <div>
    <h1>Company name: ${this.companyName} </h1>
    <h2> catchphrase: ${this.catchPhrase} </h2>
    <h3> latitude: ${this.location.lat}</h3>
    <h3> longitude: ${this.location.lng} </h3>
    </div>
    `;
  }

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
