import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { I18nService } from '../../../../core/services/i18n.service';
import { SectorsService } from '../../../sectors/services/sectors.service';
import { Sector } from '../../../../core/models/sector.model';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css'
})
export class ServicesSectionComponent implements OnInit {
  private sectorsService = inject(SectorsService);
  i18nService = inject(I18nService);
  services: Sector[] = [];

  ngOnInit(): void {
    this.sectorsService.getAllSectors().subscribe(sectors => {
      this.services = sectors.slice(0, 6); // Show first 6 services
    });
  }

  getServiceImage(image: string): string {
    return `assets/images/services/${image}`;
  }
}
