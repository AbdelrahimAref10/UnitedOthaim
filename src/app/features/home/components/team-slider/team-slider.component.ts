import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { I18nService } from '../../../../core/services/i18n.service';
import { TeamMember } from '../../../../core/models/team-member.model';

@Component({
  selector: 'app-team-slider',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './team-slider.component.html',
  styleUrl: './team-slider.component.css'
})
export class TeamSliderComponent {
  i18nService = inject(I18nService);
  members: TeamMember[] = [

    {
      id: '2',
      name: 'Dr. Abdullah bin Abdulkarim Al-Othaim',
      nameAr: 'د. عبد الله بن عبد الكريم العثيم',
      position: 'chief executive officer',
      positionAr: 'الرئيس التنفيذي',
      image: 'assets/images/team/3.avif',
      isBoardMember: false
    },
    {
      id: '3',
      name: 'A. Muhammad bin Ahmed Al-Othaim',
      nameAr: 'أ. محمد بن عبد الله العثيم',
      position: 'General Director',
      positionAr: 'المدير العام',
      image: 'assets/images/team/2.avif',
      isBoardMember: false
    },

  ];
}
