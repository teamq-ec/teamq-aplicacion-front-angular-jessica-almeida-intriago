import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notice',
  imports: [CommonModule],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.css',
})
export class NoticeComponent {
  botones = [
    { texto: 'Noticias Locales' },
    { texto: 'Noticias Internacionales' },
    { texto: 'Deportes' },
    { texto: 'Tecnología' },
  ];
}
