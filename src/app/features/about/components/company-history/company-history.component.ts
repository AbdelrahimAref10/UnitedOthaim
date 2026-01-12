import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-company-history',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './company-history.component.html',
  styleUrl: './company-history.component.css'
})
export class CompanyHistoryComponent {}
