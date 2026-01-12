import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService, Language } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  i18nService = inject(I18nService);

  setLanguage(lang: Language): void {
    this.i18nService.setLanguage(lang);
  }
}
