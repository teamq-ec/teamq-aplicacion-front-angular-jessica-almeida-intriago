import { Injectable, signal } from '@angular/core';

export interface Slide {
  headline: string;
  text: string;
  buttonText: string;
  buttonAction: () => void;
}

@Injectable({
  providedIn: 'root'
})

export class SliderMock {
  slides = signal<Slide[]>([
    {
      headline: 'Bienvenido a Angular 20',
      text: 'Construye interfaces modernas y rápidas con standalone components.',
      buttonText: 'Aprender Más',
      buttonAction: () => alert('Clicked Aprender Más'),
    },
    {
      headline: 'Componentes Dinámicos',
      text: 'Carga y crea componentes basados en datos desde servicios.',
      buttonText: 'Ver Ejemplo',
      buttonAction: () => alert('Clicked Ver Ejemplo'),
    },
    {
      headline: 'Responsive y Animaciones',
      text: 'Haz que tus aplicaciones se vean bien en cualquier dispositivo.',
      buttonText: 'Más Info',
      buttonAction: () => alert('Clicked Más Info'),
    }, 
  ]);
}
