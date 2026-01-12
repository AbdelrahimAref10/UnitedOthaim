import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

interface Stat {
  key: string;
  targetValue: number;
  suffix: string;
  icon?: string;
}

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.css'
})
export class StatsSectionComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('statsSection', { static: false }) statsSection!: ElementRef;

  stats: Stat[] = [
    { key: 'home.stats.years', targetValue: 30, suffix: '+' },
    { key: 'home.stats.sectors', targetValue: 9, suffix: '' },
    { key: 'home.stats.projects', targetValue: 500, suffix: '+' },
    { key: 'home.stats.clients', targetValue: 1000, suffix: '+' }
  ];

  displayedValues: number[] = [0, 0, 0, 0];
  hasAnimated = false;
  private observer?: IntersectionObserver;
  private timers: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Initialize displayed values to 0
    this.displayedValues = this.stats.map(() => 0);
  }

  ngAfterViewInit() {
    // Use setTimeout to ensure ViewChild is available
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 0);
  }

  ngOnDestroy() {
    // Clear all timers
    this.timers.forEach(timer => clearInterval(timer));
    this.timers = [];
    
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    if (!this.statsSection?.nativeElement) {
      console.warn('Stats section element not found');
      return;
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of the section is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateCounters();
        }
      });
    }, options);

    this.observer.observe(this.statsSection.nativeElement);
  }

  private animateCounters() {
    this.stats.forEach((stat, index) => {
      const duration = 2000; // 2 seconds
      const steps = 100; // More steps for smoother animation
      const increment = stat.targetValue / steps;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(Math.floor(increment * currentStep), stat.targetValue);
        this.displayedValues[index] = currentValue;
        
        // Manually trigger change detection
        this.cdr.detectChanges();

        if (currentStep >= steps) {
          this.displayedValues[index] = stat.targetValue;
          clearInterval(timer);
          this.cdr.detectChanges();
        }
      }, stepDuration);
      
      this.timers.push(timer);
    });
  }

  getDisplayValue(index: number): string {
    const stat = this.stats[index];
    return `${this.displayedValues[index]}${stat.suffix}`;
  }
}
