import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SliderMock } from '../../services/slider-mock';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})
export class Slider {
  currentIndex = signal(0);

  constructor(public sliderData: SliderMock) {}

  get slides() {
    return this.sliderData.slides();
  }

  next() {
    this.currentIndex.update(i => (i + 1) % this.slides.length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.slides.length) % this.slides.length);
  }
}
