import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `
    <div>
    <h1> User name: ${this.name} </h1>
    <h3> latitude: ${this.location.lat}</h3>
    <h3> longitude: ${this.location.lng} </h3>
    </div>
    `;
  }

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
