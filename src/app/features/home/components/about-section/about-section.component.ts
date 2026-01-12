import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {
  features = [
    {
      icon: '🏢',
      titleKey: 'home.about.feature1.title',
      descriptionKey: 'home.about.feature1.description'
    },
    {
      icon: '🚀',
      titleKey: 'home.about.feature2.title',
      descriptionKey: 'home.about.feature2.description'
    },
    {
      icon: '🌟',
      titleKey: 'home.about.feature3.title',
      descriptionKey: 'home.about.feature3.description'
    },
    {
      icon: '🤝',
      titleKey: 'home.about.feature4.title',
      descriptionKey: 'home.about.feature4.description'
    }
  ];
}
