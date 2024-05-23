import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GoogleMapsModule, GoogleMap } from '@angular/google-maps';
import { BoxComponent } from '../../component/box/box.component';

@Component({
  selector: 'map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule, BoxComponent],
  templateUrl: './map.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class MapComponent {
  mapOptions: google.maps.MapOptions = {
    center: {
      lat: 49.740047454833984,
      lng: 5.71795129776001,
    },
    scrollwheel: false,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    mapTypeId: "roadmap",
    zoom: 7,
  };

  markers = [
    {
      position: {
        lat: 49.740047454833984,
        lng: 5.71795129776001,
      },
      label: {
        color: "red",
        text: "test",
      },
    },
  ];
}
