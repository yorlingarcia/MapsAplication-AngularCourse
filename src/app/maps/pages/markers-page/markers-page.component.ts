import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})
export class MarkersPageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentCenter: LngLat = new LngLat(
    -72.64665130464374,
    7.3753924772996555
  );

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento html no fue encontrado';
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: 10, // starting zoom
    });

    const markerHtml = document.createElement('div');
    markerHtml.innerHTML = 'Yorlin Garcia';

    const marker = new Marker({
      //color: 'red'
      element: markerHtml,
    })
      .setLngLat(this.currentCenter)
      .addTo(this.map);
  }
}
