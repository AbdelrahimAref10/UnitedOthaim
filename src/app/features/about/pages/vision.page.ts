import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, TranslatePipe],
  templateUrl: './vision.page.html',
  styleUrl: './vision.page.css'
})
export class VisionPage {}
