import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-mission-values',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './mission-values.component.html',
  styleUrl: './mission-values.component.css'
})
export class MissionValuesComponent {
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
}
