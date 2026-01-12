import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMember } from '../../../core/models/team-member.model';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css'
})
export class TeamCardComponent {
  @Input({ required: true }) member!: TeamMember;
  
  constructor(public i18nService: I18nService) {}
}
