import {User} from './User';
import {Company} from "./Company";
export interface Mappable{
location: {
    lat: number;
    lng: number;
};
markerContent():string;
}
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 1,
                lng: 0,
            },
        });
    }


     addMarker(mappaple: Mappable): void {
       const marker =  new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappaple.location.lat,
                lng: mappaple.location.lng,
            }
        })
         marker.addListener('click', () => {
             const infoWindow = new google.maps.InfoWindow({
                 content:mappaple.markerContent()
             });

             infoWindow.open(this.googleMap,marker)
         })
    }


    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng,
    //         }
    //     })
    //
    // }

}