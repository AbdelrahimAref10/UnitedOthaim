import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {
  @Input() title?: string;
  @Input() titleKey?: string;
  @Input() subtitle?: string;
  @Input() subtitleKey?: string;
  @Input() description?: string;
  @Input() descriptionKey?: string;
}
