import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sector } from '../../../core/models/sector.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  getFeaturedSectors(): Observable<Sector[]> {
    // In a real app, this would fetch from an API
    const sectors: Sector[] = [
      {
        id: 'elevator',
        name: 'Elevator Sector',
        nameAr: 'قطاع المصاعد',
        description: 'Established in 2006 AD in order to keep pace with the urban renaissance',
        descriptionAr: 'تأسس في عام 2006 م لمواكبة النهضة العمرانية',
        route: 'elevator'
      },
      {
        id: 'contracting',
        name: 'Contracting Sector',
        nameAr: 'قطاع المقاولات',
        description: 'Successfully implementing several projects, including residential, administrative and commercial buildings',
        descriptionAr: 'تنفيذ عدة مشاريع بنجاح، بما في ذلك المباني السكنية والإدارية والتجارية',
        route: 'contracting'
      },
      {
        id: 'manufacturing',
        name: 'Manufacturing Sector',
        nameAr: 'قطاع التصنيع',
        description: 'The National Materials Company aims to carry out industrial and mining activities',
        descriptionAr: 'تهدف شركة المواد الوطنية إلى القيام بالأنشطة الصناعية والتعدينية',
        route: 'manufacturing'
      }
    ];
    return of(sectors);
  }
}
