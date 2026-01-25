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
      // Filter to show only the 4 specified sectors and order them
      const allowedSectorIds = ['elevator', 'contracting', 'next-consulting', 'investments'];
      const filtered = sectors.filter(sector => allowedSectorIds.includes(sector.id));
      
      // Order: Contracting (01), Elevator (02), Investments (03), Next Consulting (04)
      const orderMap: { [key: string]: number } = {
        'contracting': 1,
        'elevator': 2,
        'investments': 3,
        'next-consulting': 4
      };
      
      this.services = filtered.sort((a, b) => (orderMap[a.id] || 0) - (orderMap[b.id] || 0));
    });
  }

  getServiceImage(image: string): string {
    return `assets/images/services/${image}`;
  }

  getSectorBadgeNumber(sectorId: string): string {
    const badgeMap: { [key: string]: string } = {
      'contracting': '01',
      'elevator': '02',
      'investments': '03',
      'next-consulting': '04'
    };
    return badgeMap[sectorId] || '00';
  }
}
