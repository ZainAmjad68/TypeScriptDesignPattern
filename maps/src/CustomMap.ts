// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  // a decent solution but whenever we add a new class that wants to show the marker, we have to import it here and hope that it has the location property, not good
  /*  addMarker(mappable: User | Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });
  }*/

  // best solution after dependency inversion, now this method is dependent on other classes and demands them to implement Mappable interface (i.e.; have a location object) in order to use it
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
