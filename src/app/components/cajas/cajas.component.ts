import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cajas',
  imports: [CommonModule],
  templateUrl: './cajas.component.html',
  styleUrl: './cajas.component.css'
})
export class CajasComponent {
  cajas = Array.from({ length: 12 }, (_, i) => i + 1);
}
