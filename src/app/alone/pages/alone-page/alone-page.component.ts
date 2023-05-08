import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';

@Component({
  // selector: 'app-alone-page',
  standalone: true,
  imports: [CounterAloneComponent],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css'],
})
export class AlonePageComponent {}
