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
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ThemeToggleComponent,
    LanguageSwitcherComponent,
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  i18nService = inject(I18nService);
  router = inject(Router);
  smoothScrollService = inject(SmoothScrollService);
  isMobileMenuOpen = false;
  isScrolled = signal(false);
  isTransparent = signal(true);
  private routerSubscription?: Subscription;

  navLinks = [
    { key: 'nav.home', route: '/', section: null },
    { key: 'nav.about', route: '/', section: 'about' },
    { key: 'nav.sectors', route: '/sectors', section: null },
    { key: 'nav.clients', route: '/', section: 'clients' },
    { key: 'nav.team', route: '/', section: 'team' },
    { key: 'nav.contact', route: '/', section: 'contact' }
  ];

  ngOnInit(): void {
    // Load initial language
    this.i18nService.loadLanguage(this.i18nService.getCurrentLanguage()).subscribe();
    
    // Check if on home page
    this.checkIfHomePage();
    
    // Listen to route changes
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkIfHomePage();
      });
    
    // Check scroll on init
    this.onWindowScroll();
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  checkIfHomePage(): void {
    const isHome = this.router.url === '/' || this.router.url === '';
    this.isTransparent.set(isHome);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isScrolled.set(scrollPosition > 50);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  navigateToSection(route: string, section: string | null): void {
    this.closeMobileMenu();
    
    if (section) {
      // Navigate to home page first if not already there
      if (this.router.url !== '/') {
        this.router.navigate(['/']).then(() => {
          setTimeout(() => {
            this.smoothScrollService.scrollToElement(section);
          }, 100);
        });
      } else {
        // Already on home page, just scroll
        this.smoothScrollService.scrollToElement(section);
      }
    } else {
      // Regular navigation
      this.router.navigate([route]);
    }
  }
}
