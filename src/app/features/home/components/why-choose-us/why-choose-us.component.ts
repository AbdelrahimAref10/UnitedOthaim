import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

interface Feature {
  titleKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {
  features: Feature[] = [
    {
      titleKey: 'home.whyChooseUs.feature1.title',
      descriptionKey: 'home.whyChooseUs.feature1.description'
    },
    {
      titleKey: 'home.whyChooseUs.feature2.title',
      descriptionKey: 'home.whyChooseUs.feature2.description'
    },
    {
      titleKey: 'home.whyChooseUs.feature3.title',
      descriptionKey: 'home.whyChooseUs.feature3.description'
    },
    {
      titleKey: 'home.whyChooseUs.feature4.title',
      descriptionKey: 'home.whyChooseUs.feature4.description'
    }
  ];
}
