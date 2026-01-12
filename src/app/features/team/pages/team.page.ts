import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { TeamCardComponent } from '../../../shared/components/team-card/team-card.component';
import { TeamMember } from '../../../core/models/team-member.model';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, TeamCardComponent],
  templateUrl: './team.page.html',
  styleUrl: './team.page.css'
})
export class TeamPage {
  teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Team Member 1',
      nameAr: 'عضو الفريق 1',
      position: 'Manager',
      positionAr: 'مدير',
      isBoardMember: false
    }
  ];
}
