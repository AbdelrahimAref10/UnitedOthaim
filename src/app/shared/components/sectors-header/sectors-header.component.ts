import { Component, inject, OnInit, OnDestroy, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { I18nService } from '../../../core/services/i18n.service';
import { SmoothScrollService } from '../../../core/services/smooth-scroll.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-sectors-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ThemeToggleComponent,
    LanguageSwitcherComponent,
    TranslatePipe
  ],
  templateUrl: './sectors-header.component.html',
  styleUrl: './sectors-header.component.css'
})
export class SectorsHeaderComponent implements OnInit, OnDestroy {
  i18nService = inject(I18nService);
  router = inject(Router);
  smoothScrollService = inject(SmoothScrollService);
  isMobileMenuOpen = false;
  isScrolled = signal(false);
  private routerSubscription?: Subscription;

  navLinks = [
    { key: 'nav.home', route: '/', section: null },
    { key: 'nav.about', route: '/', section: 'about' },
    { key: 'nav.sectors', route: '/', section: 'sectors' },
    { key: 'nav.clients', route: '/', section: 'clients' },
    { key: 'nav.team', route: '/', section: 'team' },
    { key: 'nav.contact', route: '/', section: 'contact' }
  ];

  ngOnInit(): void {
    // Load initial language
    this.i18nService.loadLanguage(this.i18nService.getCurrentLanguage()).subscribe();
    
    // Subscribe to router events
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isMobileMenuOpen = false;
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled.set(scrollPosition > 50);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigateToSection(route: string, section: string | null): void {
    this.isMobileMenuOpen = false;
    
    if (route === '/' && section) {
      this.router.navigate([route], { fragment: section }).then(() => {
        setTimeout(() => {
          this.smoothScrollService.scrollToElement(section);
        }, 100);
      });
    } else {
      this.router.navigate([route]);
    }
  }
}
