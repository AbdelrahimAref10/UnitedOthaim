import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, TranslatePipe],
  templateUrl: './clients.page.html',
  styleUrl: './clients.page.css'
})
export class ClientsPage {}
