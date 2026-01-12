import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SectorsService } from '../services/sectors.service';
import { Sector } from '../../../core/models/sector.model';
import { I18nService } from '../../../core/services/i18n.service';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-sector-detail',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './sector-detail.page.html',
  styleUrl: './sector-detail.page.css'
})
export class SectorDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private sectorsService = inject(SectorsService);
  i18nService = inject(I18nService);
  sector: Sector | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sectorsService.getAllSectors().subscribe(sectors => {
        this.sector = sectors.find(s => s.route === id) || null;
      });
    }
  }
}
