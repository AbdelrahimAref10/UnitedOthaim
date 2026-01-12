import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectorCardComponent } from '../../../../shared/components/sector-card/sector-card.component';
import { Sector } from '../../../../core/models/sector.model';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-sectors-preview',
  standalone: true,
  imports: [CommonModule, RouterModule, SectorCardComponent, TranslatePipe],
  templateUrl: './sectors-preview.component.html',
  styleUrl: './sectors-preview.component.css'
})
export class SectorsPreviewComponent {
  @Input() sectors: Sector[] = [];
}
