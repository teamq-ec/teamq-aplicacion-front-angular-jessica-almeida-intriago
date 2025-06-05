import { Component } from '@angular/core';
import { CajasComponent } from './components/cajas/cajas.component';
import { NoticeComponent } from './components/notice/notice.component';
import { SliderComponent } from './components/slider/slider.component';
@Component({
  selector: 'app-root',
  imports: [CajasComponent,NoticeComponent,SliderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
