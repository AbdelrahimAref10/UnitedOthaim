import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-featured-case',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './featured-case.component.html',
  styleUrl: './featured-case.component.css'
})
export class FeaturedCaseComponent {
  caseStudy = {
    title: 'Focus on core Delivers growth for retailer trading',
    titleKey: 'home.featuredCase.title',
    descriptionKey: 'home.featuredCase.description',
    image: 'assets/images/featured-case.webp',
    link: '/cases/1'
  };
}
