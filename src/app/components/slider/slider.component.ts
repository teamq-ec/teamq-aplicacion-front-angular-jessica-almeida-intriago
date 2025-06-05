import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SliderMock } from '../../services/slider-mock';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  currentIndex = signal(0);

  constructor(public sliderData: SliderMock) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  get slides() {
    return this.sliderData.slides();
  }

  startAutoSlide() {
    setInterval(() => {
      this.currentIndex.update(i => (i + 1) % this.slides.length);
    }, 3000);
  }
}
