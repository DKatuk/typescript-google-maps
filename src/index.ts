import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
// /// <reference types="@types/google.maps" />

const user = new User();
const company = new Company();
// console.log("user:", user, "company:", company);

// const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     zoom: 1,
//     center: {
//       lat: 0,
//       lng: 0,
//     },
//   });
// What if we want to restrict engineers to use some of the methods that are associated with google maps Map class ? In this case, create your own custom Map class as a typescript file and make property private.

const customMap = new CustomMap("map");
// customMap.googleMap // Property "googleMap" is private and only accessible within class "CustomMap"

// TWO METHODS - (BAD APPROACH)
// customMap.addUserMarker(user);
// customMap.addCompanyMarker(company)

//BEST APPROACH - Check requirements with an interface
customMap.addMaker(user)
customMap.addMaker(company)
