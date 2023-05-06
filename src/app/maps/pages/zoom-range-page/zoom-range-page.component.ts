import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css'],
})
export class ZoomRangePageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;
  public currentZoom: number = 10;
  public map?: Map;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento html no fue encontrado';
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
    });
    this.mapListeners();
  }

  mapListeners() {
    if (!this.map) throw 'Mapa no inicializado';
    this.map.on('zoom', (ev) => {
      this.currentZoom = this.map!.getZoom();
    });
  }
}
