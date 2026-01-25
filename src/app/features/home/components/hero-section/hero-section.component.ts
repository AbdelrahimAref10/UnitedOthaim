import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  scrollToSectors(event: Event): void {
    event.preventDefault();
    const sectorsSection = document.getElementById('sectors');
    if (sectorsSection) {
      sectorsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
