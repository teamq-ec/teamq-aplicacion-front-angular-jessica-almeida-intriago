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
      headline: 'Lorem Ipsun 1.',
      text: 'Sunt anim mollit velit incididunt reprehenderit consectetur cupidatat labore. Tempor Lorem et est aliquip excepteur id cupidatat ut cupidatat officia in sint. Magna aliqua mollit qui do aliqua minim aliquip fugiat ut magna Lorem enim. In labore consectetur duis aute in reprehenderit esse aliquip ex ut nisi.',
      buttonText: 'Aprender Más',
      buttonAction: () => alert('Clicked Aprender Más'),
    },
    {
      headline: 'Lorem Ipsun 2.',
      text: 'Sunt anim mollit velit incididunt reprehenderit consectetur cupidatat labore. Tempor Lorem et est aliquip excepteur id cupidatat ut cupidatat officia in sint. Magna aliqua mollit qui do aliqua minim aliquip fugiat ut magna Lorem enim. In labore consectetur duis aute in reprehenderit esse aliquip ex ut nisi.',
      buttonText: 'Aprender Más',
      buttonAction: () => alert('Clicked Aprender Más'),
    },
    {
      headline: 'Lorem Ipsun 3.',
      text: 'Sunt anim mollit velit incididunt reprehenderit consectetur cupidatat labore. Tempor Lorem et est aliquip excepteur id cupidatat ut cupidatat officia in sint. Magna aliqua mollit qui do aliqua minim aliquip fugiat ut magna Lorem enim. In labore consectetur duis aute in reprehenderit esse aliquip ex ut nisi.',
      buttonText: 'Aprender Más',
      buttonAction: () => alert('Clicked Aprender Más'), 
    },
  ]);
}
