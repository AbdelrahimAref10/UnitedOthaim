import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sector } from '../../../core/models/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  getAllSectors(): Observable<Sector[]> {
    const sectors: Sector[] = [
      {
        id: 'elevator.png',
        name: 'Elevator Sector',
        nameAr: 'قطاع المصاعد',
        description: 'Established in 2006 AD in order to keep pace with the urban renaissance',
        descriptionAr: 'تأسس في عام 2006 م لمواكبة النهضة العمرانية',
        route: 'elevator'
      },
      {
        id: 'contracting.jpg',
        name: 'Contracting Sector',
        nameAr: 'قطاع المقاولات',
        description: 'Successfully implementing several projects',
        descriptionAr: 'تنفيذ عدة مشاريع بنجاح',
        route: 'contracting'
      },
      {
        id: 'manufacturing.webp',
        name: 'Manufacturing Sector',
        nameAr: 'قطاع التصنيع',
        description: 'Industrial and mining activities',
        descriptionAr: 'الأنشطة الصناعية والتعدينية',
        route: 'manufacturing'
      },
      {
        id: 'development.jpg',
        name: 'Development Sector',
        nameAr: 'قطاع التطوير',
        description: 'Real estate development and property management',
        descriptionAr: 'تطوير العقارات وإدارة الممتلكات',
        route: 'development'
      },
      {
        id: 'investments.webp',
        name: 'Investments Sector',
        nameAr: 'قطاع الاستثمارات',
        description: 'Strategic investments and partnerships',
        descriptionAr: 'الاستثمارات والشراكات الاستراتيجية',
        route: 'investments'
      },
      {
        id: 'hotel.jpg',
        name: 'Ajyad Hotel Services',
        nameAr: 'أجياد للخدمات الفندقية',
        description: 'Premium hospitality services',
        descriptionAr: 'خدمات ضيافة فاخرة',
        route: 'hotel-services'
      },
      {
        id: 'consulting.webp',
        name: 'Next Consulting Solutions',
        nameAr: 'الحلول الاستشارية التالية',
        description: 'Advanced IT consulting and technology solutions',
        descriptionAr: 'حلول استشارية تقنية متقدمة',
        route: 'next-consulting'
      },
      {
        id: 'lowCurrent.webp',
        name: 'Low Current Sector',
        nameAr: 'قطاع التيار المنخفض',
        description: 'Specialized low current systems',
        descriptionAr: 'أنظمة التيار المنخفض المتخصصة',
        route: 'low-current'
      },
      {
        id: 'happyCheese.webp',
        name: 'Happy Cheese',
        nameAr: 'هابي تشيز',
        description: 'Family entertainment and dining',
        descriptionAr: 'تجارب ترفيهية عائلية',
        route: 'happy-cheese'
      }
    ];
    return of(sectors);
  }

  getSectorById(id: string): Observable<Sector | null> {
    return this.getAllSectors().pipe(
      map(sectors => sectors.find(s => s.id === id) || null)
    );
  }
}
