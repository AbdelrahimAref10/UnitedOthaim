import { Component, OnInit, inject, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SectorsService, Project, ServiceStep, Client, UniqueFeature } from '../services/sectors.service';
import { Sector } from '../../../core/models/sector.model';
import { I18nService } from '../../../core/services/i18n.service';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { SectorsHeaderComponent } from '../../../shared/components/sectors-header/sectors-header.component';

@Component({
  selector: 'app-sector-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, SectorsHeaderComponent],
  templateUrl: './sector-detail.page.html',
  styleUrl: './sector-detail.page.css'
})
export class SectorDetailPage implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private sectorsService = inject(SectorsService);
  i18nService = inject(I18nService);
  sector: Sector | null = null;
  
  previewImages: string[] = [];
  projects: Project[] = [];
  serviceImages: string[] = [];
  serviceContent: string = '';
  serviceContentAr: string = '';
  allServiceSteps: ServiceStep[] = [];
  sectorClients: Client[] = [];
  uniqueFeatures: UniqueFeature[] = [];
  scrollPosition = signal(0);
  isPaused = signal(false);
  private animationFrame?: number;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sectorsService.getAllSectors().subscribe(sectors => {
        this.sector = sectors.find(s => s.route === id) || null;
        if (this.sector) {
          this.loadSectorData();
        }
      });
    }
  }

  loadSectorData(): void {
    if (!this.sector) return;
    
    const sectorId = this.sector.id;
    const sectorData = this.sectorsService.getSectorData(sectorId);
    
    // Load sector-specific preview image
    this.previewImages = sectorData.previewImages.length > 0 
      ? sectorData.previewImages 
      : [`assets/images/services/${this.sector.image}`];

    // Load sector-specific projects
    this.projects = sectorData.projects;

    // Load sector-specific service images
    this.serviceImages = sectorData.serviceImages;

    // Load sector-specific service content
    this.serviceContent = sectorData.serviceContent;
    this.serviceContentAr = sectorData.serviceContentAr;
    this.allServiceSteps = sectorData.serviceSteps;

    // Load sector-specific clients
    this.loadSectorClients(sectorData.clients);

    // Load sector-specific unique features
    this.uniqueFeatures = sectorData.uniqueFeatures;
  }

  loadSectorClients(clientIds: number[]): void {
    this.sectorClients = [];
    clientIds.forEach((id, index) => {
      this.sectorClients.push({
        id: (index + 1).toString(),
        logo: `assets/images/clients/client-${id}.avif`
      });
    });
    
    // Duplicate for seamless scroll
    const uniqueClients = this.sectorClients.length;
    this.sectorClients = [...this.sectorClients, ...this.sectorClients, ...this.sectorClients];
    this.startAutoScroll();
  }

  startAutoScroll(): void {
    const scrollSpeed = 0.5;
    let currentPosition = 0;
    const gap = 32;

    const getClientWidth = (): number => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) return 220 + gap;
        if (window.innerWidth >= 768) return 180 + gap;
        return 150 + gap;
      }
      return 220 + gap;
    };

    const animate = () => {
      if (!this.isPaused()) {
        const clientWidth = getClientWidth();
        const totalUniqueWidth = this.sectorClients.length / 3 * clientWidth;
        
        currentPosition += scrollSpeed;
        
        if (currentPosition >= totalUniqueWidth) {
          currentPosition = currentPosition - totalUniqueWidth;
        }
        
        this.scrollPosition.set(currentPosition);
      }
      
      this.animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
  }

  onMouseEnter(): void {
    this.isPaused.set(true);
  }

  onMouseLeave(): void {
    this.isPaused.set(false);
  }

  ngOnDestroy(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}
