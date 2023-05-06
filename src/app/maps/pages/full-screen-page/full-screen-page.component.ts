import { Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl as any).accessToken =
  'pk.eyJ1IjoieW9ybGluOTYiLCJhIjoiY2xoNWdzeTZiMWpycDNjbzF5eGIyNnZqaCJ9.9ZDRHEcNHabmbiCL7adZxw';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css'],
})
export class FullScreenPageComponent {}
