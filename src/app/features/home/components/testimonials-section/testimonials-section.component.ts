import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { I18nService } from '../../../../core/services/i18n.service';

interface Testimonial {
  id: string;
  quoteKey: string;
  author: string;
  authorAr: string;
  position: string;
  positionAr: string;
  company: string;
  companyAr: string;
  image: string;
}

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.css'
})
export class TestimonialsSectionComponent {
  i18nService = inject(I18nService);
  
  testimonials: Testimonial[] = [
    {
      id: '1',
      quoteKey: 'home.testimonials.testimonial1.quote',
      author: 'Donald Simpson',
      authorAr: 'دونالد سيمبسون',
      position: 'Chief Financial Officer',
      positionAr: 'المدير المالي',
      company: 'Jamaica International',
      companyAr: 'جامايكا الدولية',
      image: 'assets/images/testimonials/testimonial-1.jpg'
    },
    {
      id: '2',
      quoteKey: 'home.testimonials.testimonial2.quote',
      author: 'Cintia Le Corre',
      authorAr: 'سينتيا لو كور',
      position: 'Chairman',
      positionAr: 'رئيس مجلس الإدارة',
      company: 'Harmony Corporation',
      companyAr: 'شركة هارموني',
      image: 'assets/images/testimonials/testimonial-2.jpg'
    }
  ];
}
