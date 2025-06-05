import { Component } from '@angular/core';
import { Cajas } from './components/cajas/cajas';
import { Notice } from './components/notice/notice';
import { Slider } from './components/slider/slider';
@Component({
  selector: 'app-root',
  imports: [Cajas,Notice,Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
