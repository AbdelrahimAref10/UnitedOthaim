import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

interface NewsItem {
  id: string;
  titleKey: string;
  excerptKey: string;
  date: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.css'
})
export class NewsSectionComponent {
  newsItems: NewsItem[] = [
    {
      id: '1',
      titleKey: 'home.news.item1.title',
      excerptKey: 'home.news.item1.excerpt',
      date: '2024-01-15',
      image: 'assets/images/news/news-1.jpg',
      category: 'Business'
    },
    {
      id: '2',
      titleKey: 'home.news.item2.title',
      excerptKey: 'home.news.item2.excerpt',
      date: '2024-01-10',
      image: 'assets/images/news/news-2.jpg',
      category: 'Innovation'
    },
    {
      id: '3',
      titleKey: 'home.news.item3.title',
      excerptKey: 'home.news.item3.excerpt',
      date: '2024-01-05',
      image: 'assets/images/news/news-3.jpg',
      category: 'Strategy'
    },
    {
      id: '4',
      titleKey: 'home.news.item4.title',
      excerptKey: 'home.news.item4.excerpt',
      date: '2024-01-01',
      image: 'assets/images/news/news-4.webp',
      category: 'Growth'
    }
  ];
}
