import { Component, OnInit, OnDestroy, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

interface Client {
  id: string;
  logo: string;
}

@Component({
  selector: 'app-clients-slider',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './clients-slider.component.html',
  styleUrl: './clients-slider.component.css'
})
export class ClientsSliderComponent implements OnInit, OnDestroy {
  scrollPosition = signal(0);
  isPaused = signal(false);
  private autoScrollInterval?: any;
  private animationFrame?: number;

  clients: Client[] = [];

  constructor() {
    // Effect to handle smooth scrolling
    effect(() => {
      if (!this.isPaused() && this.autoScrollInterval) {
        // Animation is handled by CSS, we just update position
      }
    });
  }

  ngOnInit(): void {
    // Generate 39 clients
    for (let i = 1; i <= 39; i++) {
      this.clients.push({
        id: i.toString(),
        logo: `assets/images/clients/client-${i}.avif`
      });
    }
    
    // Duplicate clients for seamless infinite scroll
    this.clients = [...this.clients, ...this.clients, ...this.clients];
    
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  startAutoScroll(): void {
    const scrollSpeed = 0.5; // pixels per frame
    let currentPosition = 0;
    const gap = 32; // gap-8 = 32px

    const getClientWidth = (): number => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) return 220 + gap; // Desktop (220px)
        if (window.innerWidth >= 768) return 180 + gap; // Tablet (180px)
        return 150 + gap; // Mobile (150px)
      }
      return 220 + gap; // Default
    };

    const animate = () => {
      if (!this.isPaused()) {
        const clientWidth = getClientWidth();
        const totalUniqueWidth = 39 * clientWidth;
        
        currentPosition += scrollSpeed;
        
        // Reset position when we've scrolled through one set of clients
        // This creates seamless infinite scroll
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
}
