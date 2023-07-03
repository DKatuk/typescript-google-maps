/// <reference types="@types/google.maps" />
// import { User } from "./User";
// import { Company } from "./Company";

// const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     zoom: 1,
//     center: {
//       lat: 0,
//       lng: 0,
//     },
// });

//BEST APPROACH - create a gatekeeper for addMaker method, check argument type with this interface.
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  // private : I don't want other engineers to access it since they might use some methods that break the app.
  private googleMap: google.maps.Map; // instance of the class Google Maps Map.
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  // BAD PRACTICE : adding two separate methods. You need to import types in this file
  // import { User } from "./User"
  // import {Company} from "./Company"
  // Check Marker types to understand what arguments that we need to pass
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }

  // ONE METHOD - (OK, but could be problemmatic when there are more than 30 class types , we only have two at the moment : User and Company)
  // addMaker(mappable: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     },
  //   });
  // }

  //BEST APPROACH - use an interface as a gatekeeper. Any class could be used as long as they satisfy Mappable interface.
  addMaker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
