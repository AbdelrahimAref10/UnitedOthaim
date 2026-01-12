import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form.component';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { ContactForm } from '../../../core/models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, ContactFormComponent, TranslatePipe],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css'
})
export class ContactPage {
  onFormSubmit(form: ContactForm): void {
    console.log('Form submitted:', form);
    // In real app, send to API
  }
}
