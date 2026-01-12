import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { SectorCardComponent } from '../../../shared/components/sector-card/sector-card.component';
import { SectorsService } from '../services/sectors.service';
import { Sector } from '../../../core/models/sector.model';

@Component({
  selector: 'app-sectors-list',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    SectorCardComponent
  ],
  templateUrl: './sectors-list.page.html',
  styleUrl: './sectors-list.page.css'
})
export class SectorsListPage implements OnInit {
  private sectorsService = inject(SectorsService);
  sectors: Sector[] = [];

  ngOnInit(): void {
    this.sectorsService.getAllSectors().subscribe(sectors => {
      this.sectors = sectors;
    });
  }
}
