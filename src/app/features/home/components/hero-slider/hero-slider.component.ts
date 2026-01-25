import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

interface Slide {
  id: number;
  title: string;
  titleKey: string;
  subtitle: string;
  subtitleKey: string;
  description: string;
  descriptionKey: string;
  image: string;
  ctaText: string;
  ctaKey: string;
  ctaLink: string;
}

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, HeaderComponent],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.css'
})
export class HeroSliderComponent implements OnInit {
  currentSlide = signal(0);
  slides: Slide[] = [
    {
      id: 1,
      title: 'Leading Excellence Across Multiple Business Sectors',
      titleKey: 'home.hero.slide1.title',
      subtitle: 'Abdullah Abdulkarim Al Othaim United Company',
      subtitleKey: 'home.hero.slide1.subtitle',
      description: 'Since 1994, we have been committed to excellence, innovation, and sustainable growth across various specialized sectors.',
      descriptionKey: 'home.hero.slide1.description',
      image: 'assets/images/hero-slide-1.jpg',
      ctaText: 'Discover Our Sectors',
      ctaKey: 'home.hero.cta',
      ctaLink: '/sectors'
    },
    {
      id: 2,
      title: 'Building the Future Together',
      titleKey: 'home.hero.slide2.title',
      subtitle: 'Innovation & Excellence',
      subtitleKey: 'home.hero.slide2.subtitle',
      description: 'Transforming visions into reality through cutting-edge solutions and unwavering commitment to quality.',
      descriptionKey: 'home.hero.slide2.description',
      image: 'assets/images/hero-slide-2.jpg',
      ctaText: 'Our Services',
      ctaKey: 'home.hero.services',
      ctaLink: '/sectors'
    },
    {
      id: 3,
      title: 'Your Trusted Partner in Business',
      titleKey: 'home.hero.slide3.title',
      subtitle: 'Three Decades of Success',
      subtitleKey: 'home.hero.slide3.subtitle',
      description: 'With over 30 years of experience, we continue to lead the market with innovative solutions and exceptional service.',
      descriptionKey: 'home.hero.slide3.description',
      image: 'assets/images/hero-slide-3.jpg',
      ctaText: 'Contact Us',
      ctaKey: 'home.hero.contact',
      ctaLink: '/contact'
    }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  nextSlide(): void {
    this.currentSlide.set((this.currentSlide() + 1) % this.slides.length);
  }

  prevSlide(): void {
    this.currentSlide.set((this.currentSlide() - 1 + this.slides.length) % this.slides.length);
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
  }

  scrollToSectors(event: Event): void {
    event.preventDefault();
    const sectorsSection = document.getElementById('sectors');
    if (sectorsSection) {
      sectorsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
