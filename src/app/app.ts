import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SmoothScrollService } from './core/services/smooth-scroll.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App implements OnInit {
  router = inject(Router);
  smoothScrollService = inject(SmoothScrollService);
  currentUrl = '';

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url.split('#')[0]; // Remove fragment for comparison
        
        // Handle fragment navigation
        if (event.url.includes('#')) {
          const fragment = event.url.split('#')[1];
          setTimeout(() => {
            this.smoothScrollService.scrollToElement(fragment);
          }, 100);
        } else {
          // Scroll to top for route changes without fragments (e.g., sector detail pages)
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100);
        }
      });
    this.currentUrl = this.router.url.split('#')[0];
  }

  isHomePage(): boolean {
    return this.currentUrl === '/' || this.currentUrl === '';
  }

  isSectorsPage(): boolean {
    return this.currentUrl.startsWith('/sectors');
  }
}
