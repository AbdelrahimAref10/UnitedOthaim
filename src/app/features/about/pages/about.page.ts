import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { CompanyHistoryComponent } from '../components/company-history/company-history.component';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    CompanyHistoryComponent,
    TranslatePipe
  ],
  templateUrl: './about.page.html',
  styleUrl: './about.page.css'
})
export class AboutPage {
  values = ['excellence', 'innovation', 'integrity', 'sustainability'];
}
