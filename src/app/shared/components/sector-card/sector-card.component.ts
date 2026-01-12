import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Sector } from '../../../core/models/sector.model';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-sector-card',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './sector-card.component.html',
  styleUrl: './sector-card.component.css'
})
export class SectorCardComponent {
  @Input({ required: true }) sector!: Sector;
  
  constructor(public i18nService: I18nService) {}
}
