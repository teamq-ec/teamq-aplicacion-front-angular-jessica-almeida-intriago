import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cajas',
  imports: [CommonModule],
  templateUrl: './cajas.html',
  styleUrl: './cajas.css'
})
export class Cajas {
  cajas = Array.from({ length: 12 }, (_, i) => i + 1);
}
