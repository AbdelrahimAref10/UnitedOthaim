import { Directive, ElementRef, Input, OnInit, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]',
  standalone: true
})
export class LazyLoadDirective implements OnInit {
  @Input() appLazyLoad?: string;
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    if (!this.appLazyLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (this.el.nativeElement.tagName === 'IMG') {
              this.renderer.setAttribute(this.el.nativeElement, 'src', this.appLazyLoad!);
            } else {
              this.renderer.setStyle(this.el.nativeElement, 'background-image', `url(${this.appLazyLoad})`);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement);
  }
}
