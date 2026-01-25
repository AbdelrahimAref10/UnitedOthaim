import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../../core/services/i18n.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface NewsItem {
  id: string;
  titleKey: string;
  date: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  i18nService = inject(I18nService);
  currentYear = new Date().getFullYear();

  recentNews: NewsItem[] = [
    {
      id: '1',
      titleKey: 'home.news.item1.title',
      date: 'November 9, 2024'
    },
    {
      id: '2',
      titleKey: 'home.news.item2.title',
      date: 'November 2, 2024'
    }
  ];
}
