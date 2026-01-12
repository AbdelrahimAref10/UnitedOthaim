import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSliderComponent } from '../components/hero-slider/hero-slider.component';
import { MissionValuesComponent } from '../components/mission-values/mission-values.component';
import { ServicesSectionComponent } from '../components/services-section/services-section.component';
import { FeaturedCaseComponent } from '../components/featured-case/featured-case.component';
import { NewsSectionComponent } from '../components/news-section/news-section.component';
import { StatsSectionComponent } from '../components/stats-section/stats-section.component';
import { WhyChooseUsComponent } from '../components/why-choose-us/why-choose-us.component';
import { TestimonialsSectionComponent } from '../components/testimonials-section/testimonials-section.component';
import { ClientsSliderComponent } from '../components/clients-slider/clients-slider.component';
import { TeamSliderComponent } from '../components/team-slider/team-slider.component';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form.component';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { ContactForm } from '../../../core/models/contact.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSliderComponent,
    MissionValuesComponent,
    ServicesSectionComponent,
    FeaturedCaseComponent,
    NewsSectionComponent,
    StatsSectionComponent,
    WhyChooseUsComponent,
    TestimonialsSectionComponent,
    ClientsSliderComponent,
    TeamSliderComponent,
    ContactFormComponent,
    TranslatePipe
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {
  onFormSubmit(form: ContactForm): void {
    console.log('Form submitted:', form);
    // In real app, send to API
  }
}
