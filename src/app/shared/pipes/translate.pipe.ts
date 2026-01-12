import { Pipe, PipeTransform, inject, ChangeDetectorRef } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private i18nService = inject(I18nService);
  private cdr = inject(ChangeDetectorRef);
  private lastLang = '';

  transform(key: string, params?: { [key: string]: string }): string {
    const currentLang = this.i18nService.getCurrentLanguage();
    
    // Trigger change detection when language changes
    if (this.lastLang !== currentLang) {
      this.lastLang = currentLang;
      setTimeout(() => this.cdr.markForCheck(), 0);
    }
    
    return this.i18nService.translate(key, params);
  }
}
