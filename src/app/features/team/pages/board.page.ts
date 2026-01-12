import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { TeamCardComponent } from '../../../shared/components/team-card/team-card.component';
import { TeamMember } from '../../../core/models/team-member.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, TeamCardComponent],
  templateUrl: './board.page.html',
  styleUrl: './board.page.css'
})
export class BoardPage {
  boardMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Board Member 1',
      nameAr: 'عضو مجلس الإدارة 1',
      position: 'Chairman',
      positionAr: 'رئيس مجلس الإدارة',
      isBoardMember: true
    }
  ];
}
