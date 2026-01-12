import { Component, OnInit, signal, inject } from '@angular/core';
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
export class TeamSliderComponent implements OnInit {
  i18nService = inject(I18nService);
  currentIndex = signal(0);
  members: TeamMember[] = [
    {
      id: '1',
      name: 'John Doe',
      nameAr: 'جون دو',
      position: 'CEO',
      positionAr: 'الرئيس التنفيذي',
      image: 'assets/images/team/team-1.jpg',
      isBoardMember: false
    },
    {
      id: '2',
      name: 'Jane Smith',
      nameAr: 'جين سميث',
      position: 'CTO',
      positionAr: 'رئيس التكنولوجيا',
      image: 'assets/images/team/team-2.jpg',
      isBoardMember: false
    },
    {
      id: '3',
      name: 'Ahmed Al Othaim',
      nameAr: 'أحمد العثيم',
      position: 'COO',
      positionAr: 'رئيس العمليات',
      image: 'assets/images/team/team-3.jpg',
      isBoardMember: false
    },
    {
      id: '4',
      name: 'Sarah Johnson',
      nameAr: 'سارة جونسون',
      position: 'CFO',
      positionAr: 'المدير المالي',
      image: 'assets/images/team/team-4.jpg',
      isBoardMember: false
    },
    {
      id: '5',
      name: 'Mohammed Ali',
      nameAr: 'محمد علي',
      position: 'VP Engineering',
      positionAr: 'نائب رئيس الهندسة',
      image: 'assets/images/team/team-5.jpg',
      isBoardMember: false
    }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide(): void {
    const maxIndex = Math.ceil(this.members.length / 3) - 1;
    this.currentIndex.set((this.currentIndex() + 1) % (maxIndex + 1));
  }

  prevSlide(): void {
    const maxIndex = Math.ceil(this.members.length / 3) - 1;
    this.currentIndex.set((this.currentIndex() - 1 + maxIndex + 1) % (maxIndex + 1));
  }

  getVisibleMembers(): TeamMember[] {
    const start = this.currentIndex() * 3;
    return this.members.slice(start, start + 3);
  }
}
