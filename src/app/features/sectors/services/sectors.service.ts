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
        id: 'elevator',
        name: 'Elevator Sector',
        nameAr: 'قطاع المصاعد',
        description: 'Established in 2006 AD in order to keep pace with the urban renaissance',
        descriptionAr: 'تأسس في عام 2006 م لمواكبة النهضة العمرانية',
        route: 'elevator',
        image:'elevator.png'
      },
      {
        id: 'contracting',
        name: 'Contracting Sector',
        nameAr: 'قطاع المقاولات',
        description: 'Successfully implementing several projects',
        descriptionAr: 'تنفيذ عدة مشاريع بنجاح',
        route: 'contracting',
        image: 'contracting.jpg'
      },
      {
        id: 'manufacturing',
        name: 'Manufacturing Sector',
        nameAr: 'قطاع التصنيع',
        description: 'Industrial and mining activities',
        descriptionAr: 'الأنشطة الصناعية والتعدينية',
        route: 'manufacturing',
        image: 'manufacturing.webp'
      },
      {
        id: 'development',
        name: 'Development Sector',
        nameAr: 'قطاع التطوير',
        description: 'Real estate development and property management',
        descriptionAr: 'تطوير العقارات وإدارة الممتلكات',
        route: 'development',
        image: 'development.jpg'
      },
      {
        id: 'investments',
        name: 'Investments Sector',
        nameAr: 'قطاع الاستثمارات',
        description: 'Strategic investments and partnerships',
        descriptionAr: 'الاستثمارات والشراكات الاستراتيجية',
        route: 'investments',
        image:'investments.webp'
      },
      {
        id: 'hotel-services',
        name: 'Ajyad Hotel Services',
        nameAr: 'أجياد للخدمات الفندقية',
        description: 'Premium hospitality services',
        descriptionAr: 'خدمات ضيافة فاخرة',
        route: 'hotel-services',
        image:'hotel.jpg'
      },
      {
        id: 'next-consulting',
        name: 'Next Consulting Solutions',
        nameAr: 'الحلول الاستشارية التالية',
        description: 'Advanced IT consulting and technology solutions',
        descriptionAr: 'حلول استشارية تقنية متقدمة',
        route: 'next-consulting',
        image:'consulting.webp'
      },
      {
        id: 'lowCurrent',
        name: 'Low Current Sector',
        nameAr: 'قطاع التيار المنخفض',
        description: 'Specialized low current systems',
        descriptionAr: 'أنظمة التيار المنخفض المتخصصة',
        route: 'low-current',
        image:'lowCurrent.webp'
      },
      {
        id: 'happy-cheese',
        name: 'Happy Cheese',
        nameAr: 'هابي تشيز',
        description: 'Family entertainment and dining',
        descriptionAr: 'تجارب ترفيهية عائلية',
        route: 'happy-cheese',
        image:'happyCheese.webp'
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
