import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectorsHeaderComponent } from '../../../shared/components/sectors-header/sectors-header.component';
import { SectorCardComponent } from '../../../shared/components/sector-card/sector-card.component';
import { SectorsService } from '../services/sectors.service';
import { Sector } from '../../../core/models/sector.model';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-sectors-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SectorsHeaderComponent,
    SectorCardComponent,
    TranslatePipe
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
