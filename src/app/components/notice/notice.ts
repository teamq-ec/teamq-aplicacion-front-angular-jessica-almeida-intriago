import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notice',
  imports: [CommonModule],
  templateUrl: './notice.html',
  styleUrl: './notice.css',
})
export class Notice {
  botones = [
    { texto: 'Noticias Locales' },
    { texto: 'Noticias Internacionales' },
    { texto: 'Deportes' },
    { texto: 'Tecnología' },
  ];
}
