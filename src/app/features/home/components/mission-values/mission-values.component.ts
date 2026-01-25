import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { I18nService } from '../../../../core/services/i18n.service';

@Component({
  selector: 'app-mission-values',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './mission-values.component.html',
  styleUrl: './mission-values.component.css'
})
export class MissionValuesComponent {
  i18nService = inject(I18nService);
  
  mission = {
    titleKey: 'home.mission.title',
    descriptionKey: 'home.mission.description',
    readMoreKey: 'home.mission.readMore'
  };

  values = {
    titleKey: 'home.values.title',
    descriptionKey: 'home.values.description',
    readMoreKey: 'home.values.readMore'
  };

  valuesList = ['excellence', 'innovation', 'integrity', 'sustainability'];

  // History section images - using placeholder images, replace with actual images
  historyImages = [
    'assets/images/hero-slide-1.jpg',
    'assets/images/hero-slide-2.jpg',
    'assets/images/hero-slide-3.jpg'
  ];
}
