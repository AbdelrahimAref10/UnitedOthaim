import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

interface Client {
  id: string;
  name: string;
  nameAr: string;
  logo: string;
  website?: string;
}

@Component({
  selector: 'app-clients-slider',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './clients-slider.component.html',
  styleUrl: './clients-slider.component.css'
})
export class ClientsSliderComponent implements OnInit {
  currentIndex = signal(0);
  clients: Client[] = [
    {
      id: '1',
      name: 'Client 1',
      nameAr: 'عميل 1',
      logo: 'assets/images/clients/client-1.png'
    },
    {
      id: '2',
      name: 'Client 2',
      nameAr: 'عميل 2',
      logo: 'assets/images/clients/client-2.png'
    },
    {
      id: '3',
      name: 'Client 3',
      nameAr: 'عميل 3',
      logo: 'assets/images/clients/client-3.png'
    },
    {
      id: '4',
      name: 'Client 4',
      nameAr: 'عميل 4',
      logo: 'assets/images/clients/client-4.png'
    },
    {
      id: '5',
      name: 'Client 5',
      nameAr: 'عميل 5',
      logo: 'assets/images/clients/client-5.png'
    },
    {
      id: '6',
      name: 'Client 6',
      nameAr: 'عميل 6',
      logo: 'assets/images/clients/client-6.png'
    },
    {
      id: '7',
      name: 'Client 7',
      nameAr: 'عميل 7',
      logo: 'assets/images/clients/client-7.png'
    },
    {
      id: '8',
      name: 'Client 8',
      nameAr: 'عميل 8',
      logo: 'assets/images/clients/client-8.png'
    }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide(): void {
    const visibleCount = this.getVisibleCount();
    const maxIndex = Math.max(0, this.clients.length - visibleCount);
    this.currentIndex.set((this.currentIndex() + 1) % (maxIndex + 1));
  }

  prevSlide(): void {
    const visibleCount = this.getVisibleCount();
    const maxIndex = Math.max(0, this.clients.length - visibleCount);
    this.currentIndex.set((this.currentIndex() - 1 + maxIndex + 1) % (maxIndex + 1));
  }

  getVisibleCount(): number {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 5;
      if (window.innerWidth >= 768) return 3;
      return 2;
    }
    return 5;
  }

  getVisibleClients(): Client[] {
    const count = this.getVisibleCount();
    const start = this.currentIndex();
    return this.clients.slice(start, start + count);
  }
}
